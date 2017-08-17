import axios from 'axios'
export function signUp(signee){
  console.log( signee )
  return dispatch => {
    dispatch({type: 'Loading'})
    axios.post('/api/signup', signee).then(signInRes => {
      console.log( signInRes)
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: signInRes
      })
    })
  }
}
export function logIn(signee){
  return dispatch => {
    dispatch({type: 'Loading'})
    axios.post('/api/login', signee).then(loginRes => {
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: loginRes
      })
    }).catch(err => {
      dispatch({type: 'AUTH_ERROR'})
    })
  }
}
export function handlePasswordChange(payload) {
  return {type: 'HANDLE_PASSWORD_CHANGE', payload};
}
export function handleEmailChange(payload) {
  return {type: 'HANDLE_EMAIL_CHANGE', payload};
}
