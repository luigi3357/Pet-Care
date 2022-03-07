import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';
const localhost = '192.168.100.8';
export const getLogin = (payload) =>  {
  try {
    return async (dispatch)=>{                        
        console.log("entre al return")
        let json = await axios.post(`http://${localhost}:3001/login`, payload)
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
            console.log("entre al return")
            let json = await axios.post(`http://${localhost}:3001/register`, payload)
            console.log("entre al return", json)
            return json
        }
    } catch (error) {
        console.error(error)
    }    
}



