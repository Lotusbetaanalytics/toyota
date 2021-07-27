import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_CREATE_ACCOUNT_FAIL,
  USER_CREATE_ACCOUNT_REQUEST,
  USER_CREATE_ACCOUNT_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, loginUser: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE_ACCOUNT_REQUEST:
      return { loading: true };
    case USER_CREATE_ACCOUNT_SUCCESS:
      return { loading: false, success: true, register: action.payload };
    case USER_CREATE_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, success: true, users: action.payload };
    case GET_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
