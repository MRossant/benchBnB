import { postUser, postSession, deleteSession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// action creators
export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logOutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

// thunk actions
export const login = user => dispatch => postSession(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors)))

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logOutCurrentUser()))
    .fail(errors => dispatch(receiveErrors(errors)))

export const signup = user => dispatch => postUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors)))


