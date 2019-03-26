import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // the differecne we are not consuming anything just doing something in between (processing input)
        return next.handle(req).pipe(tap(
            // here we will be intercept any event provided by request e.g request sent
            // (including response which will come last)
            event => {
                console.log('Logging Interceptor', event);
            }
        ));
    }
}
