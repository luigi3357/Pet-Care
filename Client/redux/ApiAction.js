import ACTION_TYPES from './ActionTypes.js';
import axios from 'axios';
export const fetchData = () => ({
  type: ACTION_TYPES.API_PENDING,
});

export const fetchSuccess = (data) => ({
  type: ACTION_TYPES.API_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: ACTION_TYPES.API_ERROR,
  payload: error,
});


export const getId = (name) => async (dispatch) => {
  try{
      

      const json = await axios.get("http://192.168.1.76:3001/register/" + name )

  dispatch({
      type: ACTION_TYPES.GET_ID,
      payload: name,
  })
  
  } catch(error) {
    console.log(error)
  }
};
