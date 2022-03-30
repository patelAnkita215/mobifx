import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor {
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        })
    };
    constructor(private http: HttpClient) { }

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(path, { params }).pipe(catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http
            .put(path, body, this.httpOptions)
            .pipe(catchError(this.formatErrors));
    }

    post(path: string, body: any): Observable<any> {
        return this.http
            .post(path, body, this.httpOptions)
            .pipe(catchError(this.formatErrors));
    }

    delete(path: any): Observable<any> {
        return this.http.delete(path).pipe(catchError(this.formatErrors));
    }
}