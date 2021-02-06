import axios from 'axios';
import { API } from '../config/constants';

const setFirstname = (firstname) => {
  return {
    type: 'SET_FIRSTNAME',
    firstname: firstname
  };
};

export { setFirstname };