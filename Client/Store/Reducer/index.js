import ACTION_TYPES from '../Actions/ActionTypes';

const initialState = {
  loading: false,
  users: '',
  error: '',
  true:'true',
  false:'false',
  check:"",
  name:'',
  last_name:''
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
              console.log(action.payload)
              cambio = action.payload === "notEmail"? state.check === "true": state.check
              return{
                ...state,                
                check: cambio,
              }
    default:
      return state;
  }
};

export default apiReducer;