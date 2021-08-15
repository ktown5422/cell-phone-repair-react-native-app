import { SIGN_IN } from './actionTypes';

export const signIn = (id, token) => ({
    type: actions.SIGN_IN,
    payload: {
        id: user.id,
        token: token,
    }
})