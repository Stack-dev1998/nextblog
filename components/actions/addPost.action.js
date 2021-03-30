import * as types from "../types";
export const addPostRequest = (payload) => ({
  type: types.ADD_POST_REQUEST,
  payload: payload,
});

export default { addPostRequest };
