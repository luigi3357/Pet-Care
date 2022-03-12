import ACTION_TYPES from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  users: "",
  error: "",
  all_posts: [],
  filtered_posts: [],
  checkout_link: "",
  login: {
    id: "79fbc2d8-e876-4da3-af02-57c6c06c1a15",
    email: "darianesquivel@gmail.com",
    password: "darianesquivel123",
    token: null,
    name: "darian",
    last_name: "esquivel",
    bio: "Pequeña bio generica contando lo terrible que es mi vida y que a nadie le interesa saber",
    phone: null,
    location: null,
    keeper: false,
    rating: "3.50",
    bookings: 4,
    profileImgURL:
      "https://as2.ftcdn.net/v2/jpg/02/41/41/19/1000_F_241411954_4YTOaAtM4QrIMhOVLgglstw3PUGRvonq.jpg",
    myImages: [
      "https://imgar.zonapropcdn.com/avisos/1/00/46/83/60/99/1200x1200/1743242165.jpg",
      "https://imgar.zonapropcdn.com/avisos/1/00/46/83/60/99/1200x1200/1743242042.jpg",
      "https://imgar.zonapropcdn.com/avisos/resize/1/00/46/83/60/99/1200x1200/1743242122.jpg",
    ],
    createdAt: "2022-03-12T19:17:27.095Z",
    updatedAt: "2022-03-12T19:17:27.095Z",
    posteos: [
      {
        id: "20018a36-13cc-4d30-83b4-56d44900e6c7",
        title: "Acerca de Darian Esquivel",
        description:
          "Hola!! soy Darian Esquivel de morón BA, tus mascotas no sentirán el cambio de casa porque al quedar con nosotros entran en un ambiente de hogar y con la seguridad de un médico en casa.",
        price: null,
        type: "roedores",
        size: "grande",
        address: null,
        image: null,
        phone: null,
        createdAt: "2022-03-12T19:17:27.176Z",
        updatedAt: "2022-03-12T19:17:27.176Z",
        author_id: "79fbc2d8-e876-4da3-af02-57c6c06c1a15",
      },
    ],
    reviews: [
      {
        id: "b4d28180-76ed-46cc-89cf-b233f83f9c9d",
        from_id: "8e420ba6-4989-49af-9b9a-75a78c00c726",
        name: "pablo moyano",
        message:
          "Fue nuestra primera vez con la aplicación y sin dudarlo recomiendo ampliamente a Darian!! Muchas gracias.",
        rate: 5,
        createdAt: "2022-03-12T19:17:27.225Z",
        updatedAt: "2022-03-12T19:17:27.225Z",
        reviewedUser_id: "79fbc2d8-e876-4da3-af02-57c6c06c1a15",
      },
    ],
  },
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
