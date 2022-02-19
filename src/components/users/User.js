import React from "react";
import { useEffect, useContext } from "react";
import UerContext from "../../context/userContext";
import { useParams, Link } from "react-router-dom";
import NavBar from "../elements/NavBar";
import Spinner from "../elements/Spinner";
import "font-awesome/css/font-awesome.css";
import { findRenderedComponentWithType } from "react-dom/cjs/react-dom-test-utils.production.min";

const User = () => {
  const userContext = useContext(UerContext);
  const { getUserInfo, getUserRepos, repos, user, loading } = userContext;
  const params = useParams();
  const username = params.username;

  useEffect(() => {
    getUserInfo(username);
    getUserRepos(username);
    // eslint-disable-next-line
  }, []);
  const {
    hireable,
    avatar_url,
    login,
    location,
    bio,
    html_url,
    company,
    email,
    followers,
    following,
    public_gists,
    public_repos,
  } = user;

  console.log(repos);
  if (loading) {
    return (
      <>
        <NavBar icon="fa fa-github" brand="GitHub Users" />
        <div className="d-flex justify-content-center aligh-items-center p-5">
          <Spinner />
        </div>
      </>
    );
  }
  return (
    <>
      <NavBar icon="fa fa-github" brand="GitHub Users" />

      <div className="container py-5">
        <div className="d-flex align-items-center">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <div className="btn btn-secondary p-1">Back To Search</div>
          </Link>
          <h5 className="ms-3 pt-1 align-self-center">Hierable :</h5>
          {hireable ? (
            <>
              <i className="fa fa-check-square text-success"></i>
              yes
            </>
          ) : (
            <>
              <i className="fa fa-window-close  ms-2 text-danger"> </i>
            </>
          )}
        </div>
        <div className="row border py-3 my-3">
          <div className="col-md-6 text-center">
            <img
              className="col-md-5 rounded-circle"
              src={avatar_url}
              alt="avatar"
            />
            <p className="h3">{login}</p>
            <p className="h5">{location}</p>
          </div>
          <div className="col-md-6 align-self-center">
            <p className="h3">Bio</p>
            <p className="h6 mb-3">{bio}</p>
            <a href={html_url} target="_blank" className="btn btn-dark">
              Visit GitHub Page
            </a>
            <p className="my-3 h6">Company : {company}</p>
            <p className="h6">
              Email : {email ? email : "No Emial is Registered"}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center border py-3 my-3 text-center">
            <div className="badge p-2 bg-danger mx-2">
              Following : {following}
            </div>

            <div className="badge p-2 bg-success">Folowers : {followers}</div>

            <div className="badge p-2 bg-warning mx-2">
              Public Repose : {public_repos}
            </div>
            <div className="badge p-2 bg-info">
              Public Gists : {public_gists}
            </div>
          </div>
        </div>
        {/* Repositories
         */}

        {repos.map((repo, i) => {
          return (
            <div className="row border my-1 p-2" key={i}>
              <a
                href={repo.html_url}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {repo.name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default User;
