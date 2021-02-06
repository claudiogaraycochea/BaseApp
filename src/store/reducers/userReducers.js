const initialState = {
  firstname: 'Nombre1',
};

export default function userConstructor(state = initialState, action) {
  switch (action.type) {
    case 'SET_FIRSTNAME':
      return {
        ...state,
        firstname: action.firstname
      };
    default:
      return state;
  }
}