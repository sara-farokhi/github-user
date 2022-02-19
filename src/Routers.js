import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutUs from "./components/pages/AboutUs";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";
import UserStates from "./context/UserStates";

const Routers = () => {
  return (
    <UserStates>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="users/userInfo/:username" element={<User />} />
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserStates>
  );
};

export default Routers;
