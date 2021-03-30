import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import * as types from "../types";

//user registration saga
function* addPost(action) {
  console.log(action.payload);
  action.payload.length != " " || undefined || null
    ? yield put({ type: types.ADD_POST_SUCCESS, posts: action.payload })
    : yield put({
        type: types.ADD_POST_FAIL,
        error: "Failed add post!",
      });
}

export default function* watchFetchUser() {
  yield takeLatest(types.ADD_POST_REQUEST, addPost);
}
