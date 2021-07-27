import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_CREATE_ACCOUNT_SUCCESS,
  USER_CREATE_ACCOUNT_REQUEST,
  USER_CREATE_ACCOUNT_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/Accounts/authenticate",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("loginUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("loginUser");
  dispatch({ type: USER_LOGOUT });
};

export const createAccount =
  (firstName, lastName, role, email, location, password, confirmPassword) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: USER_CREATE_ACCOUNT_REQUEST });

      const {
        userAuth: { loginUser },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginUser.jwtToken}`,
        },
      };

      const { data } = await axios.post(
        "/Accounts",
        {
          firstName,
          lastName,
          role,
          email,
          location,
          password,
          confirmPassword,
        },
        config
      );
      dispatch({
        type: USER_CREATE_ACCOUNT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_CREATE_ACCOUNT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const {
      userAuth: { loginUser },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginUser.jwtToken}`,
      },
    };

    const { data } = await axios.get(
      "/Accounts",

      config
    );
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
