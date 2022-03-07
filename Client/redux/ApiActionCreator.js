import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';

export const getLogin = (payload) =>  {
  try {
    return async (dispatch)=>{                        
        let json = await axios.post("http://192.168.1.76:3001/login", payload)
        console.log("entre al return", json)
        return json
    }
} catch (error) {
    console.error(error)
}    
}

export const registerBack= payload => {
  
    try {
        return async (dispatch)=>{                        
            let json = await axios.post("http://192.168.1.76:3001/register", payload)
            console.log("entre al return", json)
            return json
        }
    } catch (error) {
        console.error(error)
    }    
}



