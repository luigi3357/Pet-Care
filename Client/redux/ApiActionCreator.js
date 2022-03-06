import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';

export const getLogin = (payload) =>  {
  try {
    console.log(payload,"entre al try")
    return async (dispatch)=>{                        
        console.log("entre al return")
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
        console.log(payload,"entre al try")
        return async (dispatch)=>{                        
            console.log("entre al return")
            let json = await axios.post("http://192.168.1.76:3001/register", payload)
            console.log("entre al return", json)
            return json
        }
    } catch (error) {
        console.error(error)
    }    
}

// export const registerBack= payload => {
//     return (dispatch)=>{
//         try {
//             console.log(payload,"soy payload")
//             axios.post("http://localhost:3001/register", payload)
//             .then(response=>{
//                 console.log(response.data)
//                 return dispatch (
//                      response.data
//                 )
//             })
//         } catch (error) {
//             console.error(error)
//         } 
//     }
// }

