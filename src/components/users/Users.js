import { useContext } from "react";
import { Link } from "react-router-dom";
import UerContext from "../../context/userContext";
import Search from "../elements/Search";
import Spinner from "../elements/Spinner";

const Users = () => {
  const userContext = useContext(UerContext);
  const { users, loading, getUserInfo } = userContext;
  const goUserInfo = (login) => {
    getUserInfo(login);
  };

  return (
    <>
      <div className="container">
        <div className="card my-5 p-5">
          <Search />

          <div className="row">
            {loading ? (
              <Spinner />
            ) : (
              users.map(({ avatar_url, login }, i) => (
                <div className="col-md-4 col-lg-3 mb-4" key={i}>
                  <div className="card p-3 h-100 d-flex justify-content-center align-items-center ">
                    <img
                      src={avatar_url}
                      alt="avatar"
                      className="rounded-circle img-fluid"
                    />
                    <p className="h4">{login}</p>
                    <Link
                      to={`users/userInfo/${login}`}
                      onClick={() => goUserInfo(login)}
                    >
                      <p>More Info</p>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
