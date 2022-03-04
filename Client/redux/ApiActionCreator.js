import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';

const apiActionCreator = (payload) => (dispatch) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get("http://localhost:3001/user", payload)
      .then((response) => {
        dispatch(fetchSuccess(response.data));
        console.log("entre",response.data)
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.error(error);
      });
  });
};

export const registerBack= payload => {
  
    try {
        console.log(payload,"entre al try")
        return async (dispatch)=>{                        
            console.log("entre al return")
            let json = await axios.post("http://localhost:3001/register", payload)
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

export default apiActionCreator;