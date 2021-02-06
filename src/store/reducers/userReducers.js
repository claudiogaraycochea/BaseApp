const initialState = {
  auth: {},
  firstname: 'Nombre1',
  user: {},
  users: [
    {uid: 1 ,firstname: 'Tito', email: 'tito@gmail.com'},
    {uid: 2 ,firstname: 'Juan', email: 'juan@gmail.com'}
  ]
};

export default function userConstructor(state = initialState, action) {
  switch (action.type) {
    case 'SET_FIRSTNAME':
      return {
        ...state,
        firstname: action.firstname
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        auth: action.auth
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
}