import { Injectable } from '@angular/core';
import{environment}from '../../../environments/environment'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.startsWith( environment.apiUrl)){
    //make header with token 
    request=request.clone({
      setHeaders:{
        Authorization :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1OTMyMDQ3OTcsImV4cCI6MTU5MzIwODM5N30.eUn6yw7viMpFpT4xlH6Y446FEgs6RyAcNh6DQWJ2dtU'
      }
    });}
    return next.handle(request);
  }
}
