import axios from 'axios';
import ACTION_TYPES from './ActionTypes.js';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';
const localhost = '192.168.1.7';

const getUser = (payload) => (dispatch) => {
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

export const getLogin = (payload) =>  {
  try {
    return async (dispatch)=>{                        
        let json = await axios.post(`http://${localhost}:3001/login`, payload)
        return {
            type: ACTION_TYPES.GET_CHECK,
            payload: json.data
        }
    }
} catch (error) {
    console.error(error)
}    
}

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

export default function postPublic (payload){
  return async function(dispatch){
    const response= axios.post(`http://${localhost}:3001/` , payload)
    console.log(response)
    return response;
  }
}

