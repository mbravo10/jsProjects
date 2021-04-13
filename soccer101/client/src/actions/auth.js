import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CURRENT_POSTS,
  PROFILE_DELETED,
  PROFILE_CREATED,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

//LOAD user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Succesfully Created User", "success", 7000));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Logged In Succesfully", "success", 7000));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Load all posts
export const loadPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile");

    dispatch({
      type: CURRENT_POSTS,
      payload: res.data,
    });
    dispatch(setAlert("Posts loaded", "success"));
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Create and update profile for user registered
export const profile = (bio, teams) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ bio, teams });

  try {
    const res = await axios.post("/api/profile", body, config);

    dispatch({
      type: PROFILE_CREATED,
      payload: res.data,
    });
    dispatch(setAlert("Profile is created", "success", 5000));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Delete profile and user
export const deleteProfile = () => async (dispatch) => {
  try {
    const res = await axios.delete("/api/profile", {
      headers: { "x-auth-token": localStorage.getItem("token") },
    });

    dispatch({
      type: PROFILE_DELETED,
    });
    dispatch(setAlert(res.data.msg, "success", 5000));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
