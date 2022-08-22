import React from "react";
import "./friend.css";
function Friend({ friend }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="rightbar-following">
      <img
        className="rightbar-following-img"
        src={
          friend.profilePicture
            ? PF + friend.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
      <span className="rightbar-following-name">{friend.username}</span>
    </div>
  );
}

export default Friend;
