import "./sidebar.css";
import {
  RssFeed,
  Chat,
  YouTube,
  Group,
  Bookmark,
  QuestionMark,
  Work,
  Event,
  School,
} from "@mui/icons-material";

import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Sidebar({ user }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersList = await axios.get("/users/all/" + user?._id);
        setUsers(usersList.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, [user]);
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="sidebar-icon" />
            <Link to="/" className="list-item-text">
              Feed
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Chat className="sidebar-icon" />
            <Link to="/messanger" className="list-item-text">
              Chats
            </Link>
          </li>
          <li className="sidebar-list-item">
            <YouTube className="sidebar-icon" />
            <span className="list-item-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <Group className="sidebar-icon" />
            <span className="list-item-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark className="sidebar-icon" />
            <span className="list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <QuestionMark className="sidebar-icon" />
            <span className="list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <Work className="sidebar-icon" />
            <span className="list-item-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <Event className="sidebar-icon" />
            <span className="list-item-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <School className="sidebar-icon" />
            <span className="list-item-text">Courses</span>
          </li>
        </ul>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friendlist">
          {users.map((el) => (
            <Link key={el._id} to={`/profile/${el.username}`}>
              <CloseFriend user={el} />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
