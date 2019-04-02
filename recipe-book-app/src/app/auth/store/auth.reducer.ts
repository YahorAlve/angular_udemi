import * as AuthActions from '../store/auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
}

const initialState: State = {
    token: null,
    authenticated: false,
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case(AuthActions.SIGN_UP):
        case(AuthActions.SIGN_IN):
            return {
                ...state,
                authenticated: true
            };
        case(AuthActions.LOG_OUT):
            return {
                ...state,
                authenticated: false,
                token: null
            };
        case(AuthActions.SET_TOKEN):
            return {
                ...state,
                token: action.payload
            };
        default: return state;
    }
}
