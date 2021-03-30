import { takeLatest, put } from "redux-saga/effects";
import * as types from "../types";

//admin register saga
function* registerAdmin(action) {
  const payload = action.payload;
  if (payload.email != "abcd@gmail.com") {
    yield put({ type: types.ADMIN_SIGNUP_REQUEST, payload: payload });
  } else {
    yield put({
      type: types.ADMIN_SIGNUP_FAIL,
      error: "Email already exist!",
    });
  }
}

//admin login saga
function* loginAdmin(action) {
  const payload = action.payload;
  if (payload.email == "abcd@gmail.com" && payload.password == "12345") {
    yield put({ type: types.ADMIN_LOGIN_SUCCESS });
  } else {
    yield put({
      type: types.ADMIN_LOGIN_FAIL,
      error: "Wrong email or password!",
    });
  }
}

export default function* watchFetchUser() {
  yield takeLatest(types.ADMIN_LOGIN_REQUEST, loginAdmin);
  yield takeLatest(types.ADMIN_SIGNUP_REQUEST, registerAdmin);
}
