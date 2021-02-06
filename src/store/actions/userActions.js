import axios from 'axios';
import { API } from '../config/constants';

export const getUsers = () => async dispatch => { 
  try{
    const res = await axios.get(`${API}/api/users`)
    dispatch( {
      type: 'GET_USERS_SUCCESS',
      users: res.data.Users
    })
  }
  catch(e){
    dispatch( {
      type: 'GET_USERS_ERROR',
      payload: console.log(e),
    })
  }
}

export const login = () => async dispatch => { 
  try{
    const data = { email:"computadoraweb@gmail.com", password: "321Demo$" }
    const res = await axios.post(`https://d1ph2nz7q92awg.cloudfront.net/api/user/auth`, data)
    dispatch( {
      type: 'LOGIN_SUCCESS',
      auth: res.data.Auth
    })
  }
  catch(e){
    dispatch( {
      type: 'LOGIN_ERROR',
      payload: console.log(e),
    })
  }
}
