import axios from 'axios';
import ACTION_TYPES from './ActionTypes.js';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';

const localhost ='192.168.0.11' ; //'192.168.0.11'




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
            let json = await axios.post(`http://${localhost}:3001/register`, payload)
            return json
        }
    } catch (error) {
        console.error(error)
    }    
}



export default function postPublic (payload){
  return async function(dispatch){
    const response= axios.post(`http://${localhost}:3001/posts/create` , payload)
    console.log(response)
    return response;
  }
}

/*              SearchBar              */
export function searchKeyword(keywords){
  return function(dispatch){
    axios.get(`http://${localhost}:3001/search?keyword=`+ keywords.replace(" ","+"))
    .then((response)=>{
      dispatch({
        type: ACTION_TYPES.SEARCH_KEYWORD,
        payload: response.data
      })
    })
    .catch((e)=>{throw new Error('No se pudo conectar al servidor')})
  }
}

/*               HomeScreen             */

export function fetchAllPosts(){
  return function(dispatch){
    axios.get(`http://${localhost}:3001/posts/all`)
    .then((response)=>{
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_POSTS,
        payload: response.data
      })
    })
    .catch((e)=>{throw new Error('No se pudo conectar al servidor')})
    
    
  }
}


export function getFiltered(filter){
  return function(dispatch){
    axios.get(`http://${localhost}:3001/orderAndFilter`,
    {
      params : {
        order : filter
      }
    }).then((res)=>{
      dispatch({
        type : ACTION_TYPES.GET_FILTERED,
        payload : res.data
      })
    })
  }
}











