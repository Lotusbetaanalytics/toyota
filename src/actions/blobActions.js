import axios from "axios";
import {
  GET_BLOB_FAIL,
  GET_BLOB_SUCCESS,
  GET_BLOB_REQUEST,
} from "../constants/blobConstants";

export const getToyotaBlobs =
  (location, department, page) => async (dispatch, getState) => {
    try {
      dispatch({ type: GET_BLOB_REQUEST });

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
        `/api/Blob/GetBlobs?location=${location}&department=${department}&Limit=50&Page=${page}`,

        config
      );
      dispatch({
        type: GET_BLOB_SUCCESS,
        payload: data,
      });

      localStorage.setItem("response", JSON.stringify(data));
      localStorage.setItem("blobs", JSON.stringify(data.items));
    } catch (error) {
      dispatch({
        type: GET_BLOB_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
