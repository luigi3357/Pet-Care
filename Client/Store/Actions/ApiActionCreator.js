import axios from 'axios';
import ACTION_TYPES from './ActionTypes.js';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';
const localhost = 'localhost';

export const getLogin = (payload) =>  {
  try {
    return async (dispatch)=>{                        
        let json = await axios.post(`http://${localhost}:3001/login`, payload)
        console.log(json.data)
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



