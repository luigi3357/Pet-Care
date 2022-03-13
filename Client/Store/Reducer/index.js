import ACTION_TYPES from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  users: "",
  error: "",
  all_posts: [],
  filtered_posts: [],
  checkout_link: "",
  login: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.API_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ACTION_TYPES.API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ACTION_TYPES.GET_TRUE:
      return {
        ...state,
        true: action.payload,
      };
    case ACTION_TYPES.GET_FALSE:
      return {
        ...state,
        false: action.payload,
      };
    case ACTION_TYPES.GET_ID:
      return {
        ...state,
        name: action.payload,
      };
    case ACTION_TYPES.GET_LAST_NAME:
      return {
        ...state,
        last_name: action.payload,
      };
    case ACTION_TYPES.GET_CHECK:
      console.log(action.payload);
      return {
        ...state,
        login: action.payload,
      };
    case ACTION_TYPES.POST_PUBLIC:
      return {
        ...state,
      };
    case ACTION_TYPES.PAYMENT_CHECKOUT:
      return {
        ...state,
        checkout_link: action.payload,
      };
    case ACTION_TYPES.SEARCH_KEYWORD:
      return {
        ...state,
        filtered_posts: action.payload,
      };
    case ACTION_TYPES.FETCH_ALL_POSTS:
      return {
        ...state,
        all_posts: action.payload,
        filtered_posts: action.payload,
      };
    case ACTION_TYPES.GET_FILTERED:
      return {
        ...state,
        filtered_posts: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
