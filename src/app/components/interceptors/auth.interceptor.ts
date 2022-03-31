import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CommonSpinnerService } from '../../services/common-spinner.service';

@Injectable()
export class AuthInterceptor {
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        })
    };
    constructor(private http: HttpClient, public spinnerService: CommonSpinnerService) { }

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     this.spinnerService.requestStarted();
    //     return this.handler(next, request);
    // }

    // handler(next, request) {
    //     return next.handle(request)
    //         .pipe(
    //             tap(
    //                 (event) => {
    //                     if (event instanceof HttpResponse) {
    //                         this.spinnerService.requestEnded();
    //                     }
    //                 },
    //                 (error: HttpErrorResponse) => {
    //                     throw error;
    //                 }
    //             ),
    //         );
    // }

    // get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    //     this.spinnerService.requestStarted();
    //     return this.http.get(path, { params }).pipe(
    //         tap(
    //             (event) => {
    //                 if (event instanceof HttpResponse) {
    //                     this.spinnerService.requestEnded();
    //                 }
    //             },
    //             (error: HttpErrorResponse) => {
    //                 throw error;
    //             }
    //         ),
    //         catchError(this.formatErrors)
    //     );
    // }

    // put(path: string, body: Object = {}): Observable<any> {
    //     this.spinnerService.requestStarted();
    //     return this.http
    //         .put(path, body, this.httpOptions)
    //         .pipe(
    //             tap(
    //                 (event) => {
    //                     if (event instanceof HttpResponse) {
    //                         this.spinnerService.requestEnded();
    //                     }
    //                 },
    //                 (error: HttpErrorResponse) => {
    //                     throw error;
    //                 }
    //             ),
    //             catchError(this.formatErrors)
    //         );
    // }

    // post(path: string, body: any): Observable<any> {
    //     this.spinnerService.requestStarted();
    //     return this.http
    //         .post(path, body, this.httpOptions)
    //         .pipe(
    //             tap(
    //                 (event) => {
    //                     if (event instanceof HttpResponse) {
    //                         this.spinnerService.requestEnded();
    //                     }
    //                 },
    //                 (error: HttpErrorResponse) => {
    //                     throw error;
    //                 }
    //             ),
    //             catchError(this.formatErrors)
    //         );
    // }

    // delete(path: any): Observable<any> {
    //     this.spinnerService.requestStarted();
    //     return this.http.delete(path).pipe(
    //         tap(
    //             (event) => {
    //                 if (event instanceof HttpResponse) {
    //                     this.spinnerService.requestEnded();
    //                 }
    //             },
    //             (error: HttpErrorResponse) => {
    //                 throw error;
    //             }
    //         ),
    //         catchError(this.formatErrors)
    //     );
    // }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(path, { params }).pipe(catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(path, body, this.httpOptions).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: any): Observable<any> {
        return this.http.post(path, body, this.httpOptions).pipe(catchError(this.formatErrors));
    }

    delete(path: any): Observable<any> {
        return this.http.delete(path).pipe(catchError(this.formatErrors));
    }
}