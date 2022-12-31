import {GET_USERS, GET_USER, USER_ERROR} from './users.types';
import { usersData} from "../../api/urls"
import axios from 'axios';


// Get user
export const getProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(usersData,{
      headers: {
        "authToken": localStorage.getItem("token")
      }
    });
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};
