/*
 * A reducer function takes two arguments, the current state and an actions and returns based on both arguments, a new state
 * We could change the name of the first argument to make it more readable
 * There is immutable state that needs to be copied and updated rather than updated from the state directly
 * Payload is additional information needed to change the state
 */

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  PROFILE_DELETED,
  PROFILE_CREATED,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function authReducer(state = initialState, action) {
  //Destructor the type and payload from the action args
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case PROFILE_DELETED:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case PROFILE_CREATED:
    default:
      return state;
  }
}
