import { Effect, Actions } from '@ngrx/effects';

export class AuthEffects {

    @Effect()
    authSignUp;

    /* Observable Name convetnion is add $ to the name like name$ */
    /* ngrx/effects (AuthEffects here) can access directly actions from registered stores in application 
    we just need to add EffectsModule in app module*/
    constructor(private actions$: Actions) {

    }

}
