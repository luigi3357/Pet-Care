const ACTION_TYPES = {
  API_PENDING: 'API_PENDING',
  API_SUCCESS: 'API_SUCCESS',
  API_ERROR: 'API_ERROR',
};
export default ACTION_TYPES;







// export const registerBack= payload => {
//     return async (dispatch)=>{        
//         let json = await axios.post("http://localhost:3001/register", payload)
//         return json
//     }
// }
// export const registerBack= payload => {
//     return (dispatch)=>{
//         console.log(payload,"soy payload")
//         axios.post("http://localhost:3001/register", payload)
//         .then(response=>{
//             console.log(response.data)
//             return dispatch (
//                  response.data
//             )
//         })
       
//     }
// }