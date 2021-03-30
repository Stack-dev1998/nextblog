import * as types from "../types";

const initialState = {
  loading: false,
  isRegistered: null,
  isLogedin: false,
  admin: {},
  error: {},
};
const loginAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogedin: true,
      };

    case types.ADMIN_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
const signupAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADMIN_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.ADMIN_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        admin: action.payload,
        isRegistered: true,
      };

    case types.ADMIN_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        isRegistered: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export { loginAdminReducer, signupAdminReducer };
