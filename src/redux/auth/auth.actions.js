import axios from "axios";
import { loadUserData, registerUser } from "../../api/authApi";
import {loadUserData as _loadUserData, register_Client, usersData ,registerdoctor, loginUser, login_Doctor} from '../../api/urls';
import setAuthToken from "./auth.utils";
import { setAlert } from "../alert/alert.actions";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  DOC_LOGIN_SUCCESS,
  DOC_REGISTER_SUCCESS
} from "./auth.types";
import { SET_ALERT } from "../alert/alert.types";

// Load User
// export const loadUser = () => async (dispatch) => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }
//   try {
//     const res = await axios.get(usersData, {
//       headers: {
//         "Authentication" : localStorage.getItem("token")
//       }
//     });
//     dispatch({
//       type: USER_LOADED,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err)
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };

// Patients Register User
// export const registerClient =
//   ({ username, password, email }) =>
//   async (dispatch) => {
//     try {
//       const body = JSON.stringify({ username, password, email });

//       const config_headers = {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       };
//       const res = await axios.post(register_Client, body, config_headers);
//       console.log(res)
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data,
//       });

//       dispatch(setAlert(res.data.msg, "success"));

//       // dispatch(loadUser());
//     } catch (err) {
//       console.log(err.response.data.msg)
//       dispatch(setAlert(err.response.data.msg, "danger"));

//       dispatch({
//         type: REGISTER_FAIL,
//       });
//     }
//   };


  // Doctor Register
  export const registerDoctor =
  ({ name, email, phone,fee, age,specialist,address,password, salary, time, gender,workingHrs  }) =>
  async (dispatch) => {
    try {

  
      const body = JSON.stringify({  name, email, phone,fee, age,specialist,address,password, salary, time, gender,workingHrs});

      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };  
      const res = await axios.post(registerdoctor, body, config_headers);
      console.log(res)
      dispatch({
        type: DOC_REGISTER_SUCCESS,
        payload: res.data,
      });
      
   
      dispatch(setAlert(res.data.msg, "success"));

      // dispatch(loadUser());
    } catch (err) {
     
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };




// Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({ email, password });

      const res = await axios.post(loginUser, body, config_headers);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(setAlert(res.data.msg, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };


// Login Doctor
export const loginDoctor =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config_headers = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({ email, password });

      const res = await axios.post(login_Doctor, body, config_headers);

      dispatch({
        type: DOC_LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(setAlert(res.data.msg, "success"));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, "danger"));
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };


//LOGOUT
export const logout = () => (dispatch) => {
  dispatch(setAlert("User has logged out", "success"));
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  dispatch({ type: LOGOUT });
};
