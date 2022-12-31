import localStorage from 'redux-persist/es/storage';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  DOC_REGISTER_SUCCESS,
  DOC_LOGIN_SUCCESS
} from './auth.types';
 
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function auth(state = initialState, action) {
  console.log(action)
  switch (action.type) {
   
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem("role", action.payload.role)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        role: action.payload.role
      };
      case DOC_LOGIN_SUCCESS:
          localStorage.setItem('token', action.payload.token);
          localStorage.setItem("role", action.payload.role);
          localStorage.setItem("id", action.payload.id)
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false,
            role: action.payload.role
          };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      
      localStorage.removeItem('persist:main-root');
      return {
        initialState
      };
    default:
      return state;
  }
}
