import { setAlert } from "../alert/alert.actions";
import {
  GET_POSTS,
  GET_POST,
  GET_TAG_POSTS,
  POST_ERROR,
  DELETE_POST,
  ADD_POST,
  GET_PATIENTS,
  CRT_APPOINT,
  GET_DOCTOR,
  GET_ALL_PATIENTS
} from "./posts.types";
import {
  // allPostsData,
  allTagPostsData,
  createSinglePost,
  deleteSinglePost,
} from "../../api/postsApis";
import axios from "axios";
import {
  allPostsData,
  allPatients,
  patientsAppointments,
  doctorPatients,
  appoitment_create,
  all_patients
} from "../../api/urls";

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(allPostsData);
    console.log(res)
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch(setAlert(err.response.data.msg, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getDoctor = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${allPostsData}${id}`);
    dispatch({
      type: GET_DOCTOR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch(setAlert(err.response.data.msg, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getPatients = (role) => async (dispatch) => {
  try {
    let res;
    if (role === "1") {
      res = await axios.get(patientsAppointments, {
        headers: {
          authToken: localStorage.getItem("token"),
        },
      });
    } else if (role === "2") {
      res = await axios.get(doctorPatients, {
        headers: {
          authToken: localStorage.getItem("token"),
        },
      });

      console.log("hello")
    } else if (role == "3") {
      res = await axios.get(allPatients, {
        headers: {
          authToken: localStorage.getItem("token"),
        },
      });
    }
    console.log(res);
    dispatch({
      type: GET_PATIENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch(setAlert(err.response.data.msg, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post
export const getAllPatients = () => async (dispatch) => {
  try {
    const res = await axios.get(all_patients)
    console.log(res)
    dispatch({
      type: GET_ALL_PATIENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err)
    dispatch(setAlert(err.response.data.msg, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//GET TAG POSTS

export const createAppointment = ( id, apTime) => async (dispatch) => {
  try {
    const config_headers = {
      headers: {
        "authToken" :  localStorage.token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    console.log(apTime)
    const body = JSON.stringify({ id, apTime });

    const res = await axios.post(appoitment_create, body, config_headers);
    // console.log(res)
    dispatch({
      type: CRT_APPOINT,
      payload: res.data,
    });
    dispatch(setAlert(res.data.msg, "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  try {



    const res = await createSinglePost(formData);
    console.log(res);

    dispatch({
      type: ADD_POST,
      payload: res.message,
    });

    dispatch(setAlert(res.message, "success"));

    dispatch(getPosts());
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await deleteSinglePost(id);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    dispatch(setAlert(res.data.message, "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
