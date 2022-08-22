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
import { Users } from "../../dummyData";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="sidebar-icon" />
            <span className="list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Chat className="sidebar-icon" />
            <span className="list-item-text">Chats</span>
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
        <button className="sidebar-btn">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friendlist">
          {Users.map((el) => (
            <CloseFriend key={el.id} user={el} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
