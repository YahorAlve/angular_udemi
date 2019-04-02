import { Effect, Actions, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import * as firebase from 'firebase';

import { from } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {

    /* The main idea behind effects that we are doing something after event happend but we don't change the state at all*/

    /* Effect will execute code only when ofType event occurs(dispatched) from anywhere in application */
    @Effect()
    authSignUp = this.actions$.pipe(
        ofType(AuthActions.TRY_SIGN_UP),
        map((action: AuthActions.TrySignUp) => {
            return action.payload;
        }),
        switchMap((user: {username: string, password: string}) => {
            return from(firebase.auth().createUserWithEmailAndPassword(user.username, user.password));
        }),
        switchMap(() => {
            return from(firebase.auth().currentUser.getIdToken());
        }),
        // it is like map but for all events, so here we are going to emit 2 observables
        // https://medium.com/@shairez/a-super-ninja-trick-to-learn-rxjss-switchmap-mergemap-concatmap-and-exhaustmap-forever-88e178a75f1b
        // We must dispatch in the end actions or if we don't to add @Effect({dispatch: false})
        mergeMap((token: string) => {
            return [
                {
                    type: AuthActions.SIGN_UP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    token: token
                }
            ];
        })
    );

    /* Observable Name convetnion is add $ to the name like name$ */
    /* ngrx/effects (AuthEffects here) can access directly actions from registered stores in application
    we just need to add EffectsModule in app module*/
    constructor(private actions$: Actions) {

    }

}
