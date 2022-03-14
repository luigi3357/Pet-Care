import ACTION_TYPES from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  users: "",
  error: "",
  all_posts: [],
  filtered_posts: [],
  checkout_link: "",
  login: [],
  activeFilters: [],
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
    case ACTION_TYPES.ADD_FILTER:
      return {
        ...state,
        activeFilters: [...state.activeFilters, action.payload],
      };
    case ACTION_TYPES.CLEAN_FILTER:
      return {
        ...state,
        activeFilters: [],
      };
    case ACTION_TYPES.APPLY_FILTERS:
      let all_posts_copy = [...state.all_posts];
      const new_filtered_posts = all_posts_copy.filter((post) => {
        if (
          state.activeFilters.includes(post.type) ||
          state.activeFilters.includes(post.size)
        ) {
          return true;
        }
        for (const filter of state.activeFilters) {
          if (
            post.description.includes(filter) ||
            post.title.includes(filter)
          ) {
            return true;
          }
        }
        return false;
      });
      return {
        ...state,
        filtered_posts: new_filtered_posts,
      };
    case ACTION_TYPES.GET_FILTERED:
      return {
        ...state,

        filtered_posts:
          action.payload === "all"
            ? all_posts
            : action.payload === "descRating"
            ? filtered_posts.sort((a, b) => {
                if (a.rating > b.rating) return -1;
                if (a.rating < b.rating) return 1;
                return 0;
              })
            : action.payload === "ascRating"
            ? filtered_posts.sort((a, b) => {
                if (a.rating > b.rating) return 1;
                if (a.rating < b.rating) return -1;
                return 0;
              })
            : action.payload === "ascPrice"
            ? filtered_posts.sort((a, b) => {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
                return 0;
              })
            : action.payload === "descPrice"
            ? filtered_posts.sort((a, b) => {
                if (a.price > b.price) return -1;
                if (a.price < b.price) return 1;
                return 0;
              })
            : action.payload === "pequeño" ||
              action.payload === "mediano" ||
              action.payload === "grande"
            ? filtered_posts.filter(
                (el) => el.size.toLowerCase() === action.payload.toLowerCase()
              )
            : action.payload === "perro" ||
              action.payload === "gato" ||
              action.payload === "aves" ||
              action.payload === "roedores"
            ? filtered_posts.filter(
                (el) => el.types.toLowerCase() === action.payload.toLowerCase()
              )
            : all_posts,
      };
    default:
      return state;
  }
};

export default apiReducer;
