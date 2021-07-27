import {
  GET_BLOB_FAIL,
  GET_BLOB_REQUEST,
  GET_BLOB_SUCCESS,
} from "../constants/blobConstants";

export const getBlobReducer = (state = { blobs: [] }, action) => {
  switch (action.type) {
    case GET_BLOB_REQUEST:
      return { loading: true };
    case GET_BLOB_SUCCESS:
      return {
        loading: false,
        success: true,
        response: action.payload,
        blobs: action.payload.items,
      };
    case GET_BLOB_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
