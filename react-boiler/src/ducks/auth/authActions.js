import axios from 'axios'
export function signUp(signee){
  return{
    type: 'SIGNUP',
    payload: axios.post('/api/signup', signee)
  }
}
export function logIn(signee){
  return{
    type: 'LOGIN',
    payload: axios.post('/api/login', signee)
  }
}
export function handlePasswordChange(payload) {
  return {type: 'HANDLE_PASSWORD_CHANGE', payload};
}
export function handleEmailChange(payload) {
  return {type: 'HANDLE_EMAIL_CHANGE', payload};
}
