import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
//implementing httpinterc interface
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
//use injector to get instance of auth service
  intercept(req, next) {
//because of cyclic dependency error no direct injection of auth service in constructor
    let authService = this.injector.get(AuthService)

    let tokenizedReq = req.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      }
    )
    return next.handle(tokenizedReq)
  }
}