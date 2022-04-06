import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
import { AuthInterceptor } from '../components/interceptors/auth.interceptor';
import { Endpoints } from '../../app/api-list/api-end-points';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    // public baseUrl: string = environment.baseApiUrl;

    private http: HttpClient;

    constructor(
        http: HttpClient,
        public apiService: AuthInterceptor,
        // public endpoint: Endpoints,
    ) { }

    signup(user: any): Observable<any> {
        return this.apiService.post(Endpoints.ApiEndpoint.Auth.signup, user);
    }
    login(user: any): Observable<any> {
        return this.apiService.post(Endpoints.ApiEndpoint.Auth.login, user);
    }
    verifyEmail(token: any): Observable<any> {
        return this.apiService.get(Endpoints.ApiEndpoint.Auth.verifyEmail + token);
    }
    userInfo(data: any): Observable<any> {
        return this.apiService.post(Endpoints.ApiEndpoint.Auth.userInformation, data);
    }
    getCountry() {
        return this.apiService.get(Endpoints.ApiEndpoint.Auth.countries);
    }
    getPlan() {
        return this.apiService.get(Endpoints.ApiEndpoint.Plans.plans);
    }
    addPlan() {
        return this.apiService.get(Endpoints.ApiEndpoint.Plans.addPlans);
    }
    getLeverage() {
        return this.apiService.get(Endpoints.ApiEndpoint.Leverage.leverage);
    }
    addLeverage() {
        return this.apiService.get(Endpoints.ApiEndpoint.Leverage.addLeverage);
    }
}