import ACTION_TYPES from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  all_posts: [],
  filtered_posts: [],
  users: "",
  error: "",
  true: "true",
  false: "false",
  check: "",
  name: "",
  last_name: "",
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
<<<<<<< HEAD
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
              console.log(action.payload)
              cambio = action.payload === "notEmail"? state.check === "true": state.check
              return{
                ...state,                
                check: cambio,
              }
              case ACTION_TYPES.POST_PUBLIC:
                return{
                  ...state,                
                }
              case ACTION_TYPES.POST_PAYMENT: 
                return{
                  ...state,                
                } 
=======
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
      cambio =
        action.payload === "notEmail" ? state.check === "true" : state.check;
      return {
        ...state,
        check: cambio,
      };
    case ACTION_TYPES.POST_PUBLIC:
      return {
        ...state,
      };
      case ACTION_TYPES.POST_PAYMENT: 
                return{
                  ...state,                
                } ;
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
>>>>>>> 097d29286dbdf829ef81bf2721b10e9cb99a8c42
    default:
      return state;
  }
};

export default apiReducer;
