import axios from "axios";

import ACTION_TYPES from "./ActionTypes.js";
import { fetchData, fetchSuccess, fetchError } from "./ApiAction";

export const localhost = "192.168.0.6"; //'192.168.0.11'

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

export const getLogin = (email) => {
  try {
    return async (dispatch) => {
      console.log(email, "soy el action");
      let json = await axios.get(`http://${localhost}:3001/login/` + email);
      return dispatch({
        type: ACTION_TYPES.GET_CHECK,
        payload: json.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const registerBack = (payload) => {
  try {
    return async (dispatch) => {
      let json = await axios.post(`http://${localhost}:3001/register`, payload);
      return json;
    };
  } catch (error) {
    console.error(error);
  }
};
export const resetPassword = (payload) => {
  try {
    return async (dispatch) => {
      let json = await axios.put(`http://${localhost}:3001/reset`, payload);
      return json;
    };
  } catch (error) {
    console.error(error);
  }
};

export const forgotPassword = (payload) => {
  try {
    return async (dispatch) => {
      let json = await axios.put(
        `http://${localhost}:3001/forgot-password`,
        payload
      );
      return json;
    };
  } catch (error) {
    console.error(error);
  }
};

export default function postPublic(payload) {
  return async function (dispatch) {
    const response = axios.post(
      `http://${localhost}:3001/posts/create`,
      payload
    );
    console.log(response);
    return response;
  };
}

/*              MercadoPago              */
export function postPayment(payload) {
  console.log(payload, "action creator");
  return function (dispatch) {
    console.log(payload, "funcion dispatch 2");
    axios
      .post(`http://${localhost}:3001/mercadoPago/checkout`, payload)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.PAYMENT_CHECKOUT,
          payload: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => console.log(e));

    //console.log(json)
    //return json;
  };
}

/*              SearchBar              */
export function searchKeyword(keywords) {
  return function (dispatch) {
    axios
      .get(
        `http://${localhost}:3001/search?keyword=` + keywords.replace(" ", "+")
      )
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.SEARCH_KEYWORD,
          payload: response.data,
        });
      })
      .catch((e) => {
        throw new Error("No se pudo conectar al servidor");
      });
  };
}

/*               HomeScreen             */

export function fetchAllPosts() {
  return function (dispatch) {
    axios
      .get(`http://${localhost}:3001/posts/all`)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.FETCH_ALL_POSTS,
          payload: response.data,
        });
      })
      .catch((e) => {
        throw new Error("No se pudo conectar al servidor");
      });
  };
}

/*        ADDING FILTERS         */

export function storeFilter(newFilter){
  return {
    type: ACTION_TYPES.ADD_FILTER,
    payload: newFilter
  }
}
export function cleanUpFilters(){
  return {
    type: ACTION_TYPES.CLEAN_FILTER
  }
}
export function applyFilters(){
  return {
    type: ACTION_TYPES.APPLY_FILTERS
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
      .then((res) => {
        dispatch({
          type: ACTION_TYPES.GET_FILTERED,
          payload: res.data,
        });
      });
  }
    )}}
