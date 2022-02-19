import "./App.css";
import NavBar from "./components/elements/NavBar";
import Users from "./components/users/Users";
function App() {
  return (
    <div className="App">
      <NavBar icon="fa fa-github" brand="GitHub Users" />
      <Users />
    </div>
  );
}

export default App;
