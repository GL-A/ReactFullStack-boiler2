import axios from 'axios';
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_ERROR = "AUTH_ERROR";
const AUTH_LOADING = "Loading";
const HANDLE_EMAIL_CHANGE = 'HANDLE_EMAIL_CHANGE';
const HANDLE_PASSWORD_CHANGE = 'HANDLE_PASSWORD_CHANGE';
const initialState = {
  email: '',
  password: '',
  user: null
};

export  function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload.data.user,
        email: '',
        password: ''
      })
    case AUTH_ERROR:
      console.log('in auth error reducer', state)
      return Object.assign({}, state, {failedAuth: true})
    case HANDLE_EMAIL_CHANGE:
      return Object.assign({}, state, {email: action.payload})
    case HANDLE_PASSWORD_CHANGE:
      return Object.assign({}, state, {password: action.payload})
    default:
      return state
  }
}
