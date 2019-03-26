import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}
    /* All requests are imutable. That is made to avoid midifying of request twice when we are trying to rerty the same
    request*/
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted!', req);
        /* const cloneRec = req.clone(); will still return clone which is imutable (can't change there), but we can
        provide json to clone function which will override some params in new clonned object and return it with new ones
         */
        const clonedRec = req.clone({params: req.params.set('auth', this.authService.getTokenId())});
        return next.handle(clonedRec);
    }
}
