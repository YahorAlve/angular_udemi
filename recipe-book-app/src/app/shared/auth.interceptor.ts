import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import { switchMap, take } from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private store: Store<fromApp.AppState>) {}
    /* All requests are imutable. That is made to avoid midifying of request twice when we are trying to rerty the same
    request*/
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted!', req);
        /* const cloneRec = req.clone(); will still return clone which is imutable (can't change there), but we can
        provide json to clone function which will override some params in new clonned object and return it with new ones
         */
        /*
            switchMap cancels the inner subscriptions on switching to a new one, but it doesn't cancel the outer subscription.

            -----

            switchMap does two things:

            1. It "flattens" an Observable of Observables to an Observable of normal values.

            2. It unsubscribes from previous inner observables when a new value of the outer Observable arrives.

            Here is Max' video with a short switchMap explanation:

            →  https://www.youtube.com/watch?v=6lKoLwGlglE

            Or watch this video, and you will never forget, what switchMap does:

            → https://www.youtube.com/watch?v=rUZ9CjcaCEw
         */
        return this.store.select('auth')
        .pipe(take(1), switchMap(
            (authState: fromAuth.State) => {
                const clonedRec = req.clone({params: req.params.set('auth', authState.token)});
                return next.handle(clonedRec);
            }
        ));
    }
}
