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

export const getLocationReducer = (state = { locations: [] }, action) => {
  switch (action.type) {
    case GET_LOCATION_REQUEST:
      return { loading: true };
    case GET_LOCATION_SUCCESS:
      return { loading: false, success: true, locations: action.payload };
    case GET_LOCATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_LOCATION_REQUEST:
      return { loading: true };
    case ADD_LOCATION_SUCCESS:
      return { loading: false, success: true, lc: action.payload };
    case ADD_LOCATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getDepartmentReducer = (state = { departments: [] }, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS_REQUEST:
      return { loading: true };
    case GET_DEPARTMENTS_SUCCESS:
      return { loading: false, departments: action.payload };
    case GET_DEPARTMENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addDepartmentReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DEPARTMENTS_REQUEST:
      return { loading: true };
    case ADD_DEPARTMENTS_SUCCESS:
      return { loading: false, success: true };
    case ADD_DEPARTMENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
