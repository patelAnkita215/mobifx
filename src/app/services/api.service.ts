import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from '../components/interceptors/auth.interceptor';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    public baseUrl: string = environment.baseApiUrl;

    private http: HttpClient;

    constructor(http: HttpClient, public apiService: AuthInterceptor) { }

    signup(user: any): Observable<any> {
        return this.apiService.post(this.baseUrl + '/auth/signup', user);
    }

    login(user: any): Observable<any> {
        return this.apiService.post(this.baseUrl + '/auth/login', user);
    }
}