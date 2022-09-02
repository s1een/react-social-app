import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./conversation.css";
function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    fetchUser();
  }, [conversation, currentUser]);
  async function fetchUser() {
    try {
      const friendId = conversation.members.find(
        (el) => el !== currentUser._id
      );
      const res = await axios.get(`/users/user?userId=${friendId}`);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="conversation">
      <img
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
        className="conversation-img"
      />
      <span className="conversation-name">{user?.username}</span>
    </div>
  );
}

export default Conversation;
