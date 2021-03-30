import { all } from "redux-saga/effects";
import watchAddPost from "./addPost.saga";
import watchAdmin from "./admin.saga";

export default function* IndexSaga() {
  yield all([watchAddPost(), watchAdmin()]);
}
