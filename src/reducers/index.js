import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import signInRecucer from "./signInRecucer";

export default combineReducers({
  posts: postsReducer,
  signIn: signInRecucer
});
