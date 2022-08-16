import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({ providedIn: 'root' })
export class ApiInterceptors implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      req.url.indexOf('http://localhost:5000/api/user/login') === 0 ||
      req.url.indexOf('http://localhost:5000/api/user/newUser') === 0
    ) {
      return next.handle(req);
    } else {
      let token = this.authService.getLogin().getToken();

      const newReq = req.clone({
        headers: req.headers.append('token', token),
      });

      return next.handle(newReq);
    }
  }
}
