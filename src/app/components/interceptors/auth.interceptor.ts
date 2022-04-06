import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CommonSpinnerService } from '../../services/common-spinner.service';

@Injectable()
export class AuthInterceptor {

    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGE2NWZmNGNlN2YyYTZmODYwZTEwZjMxZTg1MGEwOGMzMDdiNTQ4ZTQ2YTBlOTViODc3Mjg5MGQ2YTFmOWE3ZTcwNTkwNDk5NWNiNmYxNmYiLCJpYXQiOjE2NDkyNDI4NjQuODM3NTM4OTU3NTk1ODI1MTk1MzEyNSwibmJmIjoxNjQ5MjQyODY0LjgzNzU0MzAxMDcxMTY2OTkyMTg3NSwiZXhwIjoxNjQ5MzI5MjY0Ljc4MTA0MDkwNjkwNjEyNzkyOTY4NzUsInN1YiI6IjEyIiwic2NvcGVzIjpbXX0.S9IEEJU-ftHhBbbGTVQn_lvr0KpsT8PLwih__WY9fvUeDYkC07lAzGaYb_kN5UGtoLPZvkWDUetn33B4FYMV_S_kIlMKWF24jnzbI3v0OiE-P7xCyqIdsvvrrrizFCscPXO4lwzFiD9ZvYhoqKwSNmc7o22XDCZFGUOtpPihwi1p2ZzAy-cYoC8hA09lWH75hp6fKUB53sSMSrqf-Z7VC3nWXeLbAxztL4g-Zuijp05sHfJmGhEGHEqN8uK68Np3wDbmcxKRO6t146Fy2GD8h3tKqUyDrbErliA7cSmfvtTm_G_CQmMlaOlGEZzTWP0JK5aN2UW7p2fSXRl0sbMl56yQLcNbt_oQS1fwCwkapvBfh-YX2PQCb1csLRAvQbJIBnxeQZ1WUuV41mCVI-9o1BdodHkedoSpztKzDGngKlanBU5KxlX9cGb1_Z88PxC1osSW2Ycq6awZSp5eqIY6PsjfQ7abFeOAizUdofknUkGQgnSb3tHDNSfTHtowVyR02wJ8jFCMLZv-Gi_DMZ23Znd-DIZC3XDGKzNC6SuGIA5r0qbhfB-mkuvmfzCwNEvVAXZyf8oB9azxQPyfEykJVgW2O3_esVaT0cMArI7u9y1TXnl0ISGCq3yt7k5L7y22jDI3bwKYE9sQO435Cbq1qbdKNEVe4HFohz2MReGxaDc";
    // "Authorization": "Bearer " + this.token,
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer " + this.token,
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

    get(path: string): Observable<any> {
        return this.http.get(path, this.httpOptions).pipe(catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + this.token,
            })
        };
        return this.http.put(path, body, httpOptions).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + this.token,
            })
        };
        console.log('this.token', this.token);

        return this.http.post(path, body, httpOptions).pipe(catchError(this.formatErrors));
    }

    delete(path: any): Observable<any> {
        return this.http.delete(path).pipe(catchError(this.formatErrors));
    }
}