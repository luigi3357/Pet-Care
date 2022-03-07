import ACTION_TYPES from './ActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: '',
  true:'true',
  false:'false',
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
        data: action.payload,
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
        case ACTION_TYPES.GET_USERS:
          return {
            ...state,
            users: action.payload,
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
    default:
      return state;
  }
};

export default apiReducer;