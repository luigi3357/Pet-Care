import ACTION_TYPES from '../Actions/ActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: '',
  accessGranted: false,
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
      case ACTION_TYPES.GET_CHECK:
        return {
          ...state,
          check: action.payload,
        };
    default:
      return state;
  }
};

export default apiReducer;