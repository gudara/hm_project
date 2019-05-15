import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  auth_token = "<CAN_USE_AUTH_TOKEN_HEAR>"

  public getHeaders():HttpHeaders{
    
      return new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': "TOKEN "+this.auth_token
      })
    
  }

  public get(url, param : {}) : Observable<any>{
    
    
    let httpPraram = new HttpParams();
    for(var x in param){
      httpPraram = httpPraram.append(x,param[x]);
    }
   

    return this.http.get(url, { params: httpPraram, headers : this.getHeaders()})
    .pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        console.log("Begin", err.error)
        if (err.error instanceof ProgressEvent) {
          // Network Error
          alert('Please check your network connection. ');
        }
        else if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred: '+ err.error.message);
        }
        else{
          if(err.status == 401){
            alert("Unouthorized");
          }
          else if(err.status == 400){
            alert("Some parameters are missing.")
          }
          else if (err.status == 500){
            alert("Server side error, Please contact suport team.");
          }
        }
        //this.auth.logout();
        return throwError('Something bad happened; please try again later. '+ err.message);
      })
    )
  }


  public post(url:string, param : {}) : Observable<any> {

    let httpPraram = new HttpParams();
    for(var x in param){
      httpPraram = httpPraram.append(x,param[x]);
    }
    
    return this.http.post<any>(url, httpPraram, {headers : this.getHeaders()})
    .pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        console.log("Begin", err.error)
        if (err.error instanceof ProgressEvent) {
          // Network Error
          alert('Please check your network connection. ');
        }
        else if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred: '+ err.error.message);
        }
        else{
          if(err.status == 401){
            alert("unauthorized");
          }
          else if (err.status == 500){
            alert("Server side error, Please contact suport team.");
          }
        }
        //this.auth.logout();
        return throwError('Something bad happened; please try again later. '+ err.message);
      })
    );
  }



  public put(url:string, param : {}) : Observable<any> {

    let httpPraram = new HttpParams();
    for(var x in param){
      httpPraram = httpPraram.append(x,param[x]);
    }
    
    return this.http.put<any>(url, httpPraram, {headers : this.getHeaders()})
    .pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        console.log("Begin", err.error)
        if (err.error instanceof ProgressEvent) {
          // Network Error
          alert('Please check your network connection. ');
        }
        else if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred: '+ err.error.message);
        }
        else{
          if(err.status == 401){
            alert("Unauthorized");

          }
          else if (err.status == 500){
            alert("Server side error, Please contact suport team.");
          }
        }
        //this.auth.logout();
        return throwError('Something bad happened; please try again later. '+ err.message);
      })
    );
    
  }


  public patch(url:string, param : {}) : Observable<any> {

    let httpPraram = new HttpParams();
    for(var x in param){
      httpPraram = httpPraram.append(x,param[x]);
    }
    
    return this.http.patch<any>(url, httpPraram, {headers : this.getHeaders()})
    .pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        console.log("Begin", err.error)
        if (err.error instanceof ProgressEvent) {
          // Network Error
          alert('Please check your network connection. ');
        }
        else if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred: '+ err.error.message);
        }
        else{
          if(err.status == 401){
            alert("Unauthorized");
          }
          else if (err.status == 500){
            alert("Server side error, Please contact suport team.");
          }
        }
        return throwError('Something bad happened; please try again later. '+ err.message);
      })
    );
  }

  public delete(url:string) : Observable<any> {

   
    
    return this.http.delete<any>(url,{headers : this.getHeaders()})
    .pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        console.log("Begin", err.error)
        if (err.error instanceof ProgressEvent) {
          // Network Error
          alert('Please check your network connection. ');
        }
        else if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred: '+ err.error.message);
        }
        else{
          if(err.status == 401){
            alert("Unauthorized");
          }
          else if (err.status == 500){
            alert("Server side error, Please contact suport team.");
          }
        }
        return throwError('Something bad happened; please try again later. '+ err.message);
      })
    );
  }


}
