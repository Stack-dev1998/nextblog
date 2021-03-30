import * as types from "../types";
export const loginAdmin = (payload) => ({
  type: types.ADMIN_LOGIN_REQUEST,
  payload: payload,
});

export const registerAdmin = (payload) => ({
  type: types.ADMIN_SIGNUP_REQUEST,
  payload: payload,
});

export default { loginAdmin, registerAdmin };
