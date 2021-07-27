import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getUserReducer,
  userCreateReducer,
  userLoginReducer,
} from "./reducers/userReducers";
import {
  addDepartmentReducer,
  getDepartmentReducer,
  getLocationReducer,
  addLocationReducer,
} from "./reducers/locationReducers";
import { getBlobReducer } from "./reducers/blobReducers";

const reducer = combineReducers({
  userAuth: userLoginReducer,
  getLocation: getLocationReducer,
  addLocation: addLocationReducer,
  addDepartment: addDepartmentReducer,
  getDepartment: getDepartmentReducer,
  getBlobs: getBlobReducer,
  addUser: userCreateReducer,
  getUser: getUserReducer,
});

const loginUserFromStorage = localStorage.getItem("loginUser")
  ? JSON.parse(localStorage.getItem("loginUser"))
  : null;

const ResponseFromStorage = localStorage.getItem("response")
  ? JSON.parse(localStorage.getItem("blobs"))
  : null;

const BlobsFromStorage = localStorage.getItem("blobs")
  ? JSON.parse(localStorage.getItem("blobs"))
  : null;

const initialState = {
  userAuth: { loginUser: loginUserFromStorage },
  getBlobs: { response: ResponseFromStorage, blobs: BlobsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
