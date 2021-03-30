import * as types from "../types";

const initialState = {
  loading: false,
  posts: [],
  error: {},
};

const addPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.posts],
        error: {},
      };

    case types.ADD_POST_FAIL:
      return {
        ...state,
        loading: false,
        posts: {},
        error: action.error,
      };

    case types.GET_ALL_POSTS:
      return state.posts;

    default:
      return state;
  }
};
export default addPostReducer;
