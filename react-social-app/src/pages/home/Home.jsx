import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function Home() {
  const { user: currentUser } = useContext(AuthContext);
  return (
    <>
      <Topbar />
      <div className="home-container">
        <Sidebar user={currentUser} />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
