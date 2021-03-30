import { combineReducers } from "redux";
import postReducer from "./addPost.reducer";
import { loginAdminReducer } from "./admin.reducer";
import { signupAdminReducer } from "./admin.reducer";
const rootReducer = combineReducers({
  postReducer,
  loginAdminReducer,
  signupAdminReducer,
});

export default rootReducer;
