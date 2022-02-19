import { useReducer } from "react";
import userContext from "./userContext";
import userReducer from "./userReducer";
import React from "react";
import axios from "axios";
import {
  GET_USER,
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_ALL,
  USER_INFO,
  USER_REPOS,
} from "../types.js";

const UserStates = ({ children }) => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const initialStates = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(userReducer, initialStates);

  // SET LOADING

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // userList
  const userList = async () => {
    setLoading();
    const users = await axios.get(
      `https://api.github.com/users?clientID=${clientId}&clientSecret=${clientSecret}&per_page=8`
    );
    dispatch({ type: GET_USER, payload: users.data });
  };

  // search users

  const searchUsers = async (username) => {
    setLoading();
    const users = await axios.get(
      `https://api.github.com/search/users?q=${username}&clientID=${clientId}&clientSecret=${clientSecret}&per_page=8`
    );
    dispatch({ type: SEARCH_USERS, payload: users.data.items });
  };

  // clear all
  const clearAll = () => {
    dispatch({ type: CLEAR_ALL });
  };

  // user info
  const getUserInfo = async (username) => {
    setLoading();
    const userInfo = await axios.get(
      `https://api.github.com/users/${username}`
    );
    dispatch({ type: USER_INFO, payload: userInfo.data });
  };

  // user repos
  const getUserRepos = async (username) => {
    setLoading();
    const userRepos = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5`
    );
    dispatch({ type: USER_REPOS, payload: userRepos.data });
  };

  return (
    <userContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        clearAll,
        userList,
        searchUsers,
        getUserInfo,
        getUserRepos,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserStates;
