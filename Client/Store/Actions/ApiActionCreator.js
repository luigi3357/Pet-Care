import axios from 'axios';
import ACTION_TYPES from './ActionTypes.js';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';
const localhost = '192.168.65.107';

export const getUser = (payload) => (dispatch) => {
    dispatch(fetchData());
    return new Promise(() => {
      axios
        .get(`http://${localhost}:3001/users`)
        .then((response) => {
          dispatch(fetchSuccess(response.data));         
        })
        .catch((error) => {
          dispatch(fetchError(error));
          console.error(error);
        });
    });
  };

export const registerBack= payload => {
  
    try {
        return async (dispatch)=>{                        
            console.log("entre al return")
            let json = await axios.post(`http://${localhost}:3001/register`, payload)
            console.log("entre al return", json)
            return json
        }
    } catch (error) {
        console.error(error)
    }    
}



