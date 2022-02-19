import {
  GET_USER,
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_ALL,
  USER_INFO,
  USER_REPOS,
} from "../types.js";
const userReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_USER:
      return { ...state, users: action.payload, loading: false };
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case CLEAR_ALL:
      return { ...state, users: [] };
    case USER_INFO:
      return { ...state, user: action.payload, loading: false };
    case USER_REPOS:
      return { ...state, repos: action.payload, loading: false };

    default:
      return state;
  }
};

export default userReducer;
