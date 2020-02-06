import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

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
  return next.handle(newreq);
}
  constructor() { }
}
