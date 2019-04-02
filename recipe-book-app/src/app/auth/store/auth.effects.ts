import { Effect, Actions, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';

export class AuthEffects {

    /* Effect will execute code only when ofType event occurs(dispatched) from anywhere in application */
    @Effect()
    authSignUp = this.actions$.pipe(
        ofType(AuthActions.TRY_SIGN_UP)
    );

    /* Observable Name convetnion is add $ to the name like name$ */
    /* ngrx/effects (AuthEffects here) can access directly actions from registered stores in application
    we just need to add EffectsModule in app module*/
    constructor(private actions$: Actions) {

    }

}
