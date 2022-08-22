import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/react-social-network"
          element={user ? <Home /> : <Login />}
        />
        <Route
          path="/react-social-network/login"
          element={user ? <Navigate to="/react-social-network" /> : <Login />}
        />
        <Route
          path="/react-social-network/register"
          element={
            user ? <Navigate to="/react-social-network" /> : <Register />
          }
        />
        <Route
          path="/react-social-network/profile/:username"
          element={<Profile />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
