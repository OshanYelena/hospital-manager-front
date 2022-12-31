import {
  GET_POSTS,
  GET_POST,
  GET_TAG_POSTS,
  POST_ERROR,
  DELETE_POST,
  ADD_POST,
  GET_PATIENTS,
  CRT_APPOINT,
  GET_ALL_PATIENTS,
} from "./posts.types";

const initialState = {
  posts: [],
  patients: [],
  allPatients: [],
  post: null,
  loading: true,
  error: {},
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_TAG_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_ALL_PATIENTS:
      return {
        ...state,
        allPatients: action.payload,
        loading: false,
      };
    case GET_PATIENTS:
      return {
        ...state,
        patients: action.payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };
      // case CRT_APPOINT:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
