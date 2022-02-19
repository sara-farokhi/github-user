import { useRef, useContext } from "react";
import UerContext from "../../context/userContext";

const Search = () => {
  const userContext = useContext(UerContext);
  const { searchUsers, users, clearAll } = userContext;
  const userName = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    searchUsers(userName.current.value);
    userName.current.value = "";
  };

  return (
    <>
      <form className="input-group mb-3" onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Users's username"
          ref={userName}
        />
        <button
          type="submit"
          className="input-group-text bg-primary text-white"
        >
          <i className="fa fa-search"> </i>
        </button>
      </form>
      {users.length > 0 && (
        <button className="btn btn-dark my-3" onClick={clearAll}>
          Clear All
        </button>
      )}
    </>
  );
};

export default Search;
