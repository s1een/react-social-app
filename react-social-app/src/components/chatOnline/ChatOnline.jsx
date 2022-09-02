import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./chatonline.css";
function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    async function getFriends() {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    }
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [onlineUsers, friends]);

  async function handleClick(user) {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="chat-online">
      {onlineFriends.map((el) => (
        <div className="chat-online-friend" onClick={() => handleClick(el)}>
          <div className="chat-online-img-container">
            <img
              className="chat-online-img"
              src={
                el?.profilePicture
                  ? PF + el.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            <div className="chat-online-badge"></div>
          </div>
          <span className="chat-online-name">{el?.username}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatOnline;
