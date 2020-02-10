import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
intercept(req,next){
  var newreq=req.clone({
    setHeaders:{
      Authorization:`Bearer ${localStorage.getItem("userToken")}`
    }
  })
  return next.handle(newreq).pipe(
    catchError(this.handleError)
  );
}
public handleError(error:HttpErrorResponse){
  return throwError(error.message)
}
  constructor() { }
}
