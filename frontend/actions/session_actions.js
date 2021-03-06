import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_NO_ERRORS = 'RECEIVE_NO_ERRORS';


export const login = (user) => (dispatch) => (
  ApiUtil.signin(user).then((user) => (
    dispatch(receiveCurrentUser(user))
  ), (err) => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => (dispatch) => ApiUtil.logout().then((user) => dispatch(logoutCurrentUser()));

export const signup = (user) => (dispatch) => (
  ApiUtil.signup(user).then((user) => (
    dispatch(receiveCurrentUser(user))
  ), (err) => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

// actions
const receiveCurrentUser = (current_user) => ({
  type: RECEIVE_CURRENT_USER,
  current_user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,

});

// args: array of errors
const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const receiveNoErrors = () => ({
  type: RECEIVE_NO_ERRORS,
});
