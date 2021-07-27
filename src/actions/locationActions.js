import axios from "axios";
import {
  ADD_LOCATION_FAIL,
  ADD_LOCATION_REQUEST,
  ADD_LOCATION_SUCCESS,
  GET_LOCATION_FAIL,
  GET_LOCATION_REQUEST,
  GET_LOCATION_SUCCESS,
  GET_DEPARTMENTS_FAIL,
  GET_DEPARTMENTS_REQUEST,
  GET_DEPARTMENTS_SUCCESS,
  ADD_DEPARTMENTS_REQUEST,
  ADD_DEPARTMENTS_FAIL,
  ADD_DEPARTMENTS_SUCCESS,
} from "../constants/locationConstants";

export const addLocations = (name) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_LOCATION_REQUEST });

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
      "/api/Location/addlocation",
      { name },
      config
    );
    dispatch({
      type: ADD_LOCATION_SUCCESS,
      payload: data,
    });

    localStorage.setItem("loginUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADD_LOCATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLocations = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_LOCATION_REQUEST });

    const {
      userAuth: { loginUser },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginUser.jwtToken}`,
      },
    };
    const { data } = await axios.get("/api/Location/getalllocations", config);

    dispatch({
      type: GET_LOCATION_SUCCESS,
      payload: data,
    });

    //localStorage.setItem("loginUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_LOCATION_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const getDepartments = (name) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_DEPARTMENTS_REQUEST });

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
      "/api/Location/getlocationdepartments",
      { name },
      config
    );

    dispatch({
      type: GET_DEPARTMENTS_SUCCESS,
      payload: data,
    });
    //localStorage.setItem("loginUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_DEPARTMENTS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const addDepartments =
  (department, location) => async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_DEPARTMENTS_REQUEST });

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
        "/api/Location/addlocationdepartment",
        { department, location },
        config
      );

      dispatch({
        type: ADD_DEPARTMENTS_SUCCESS,
        payload: data,
      });
      //localStorage.setItem("loginUser", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ADD_DEPARTMENTS_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };
