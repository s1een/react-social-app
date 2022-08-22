import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios";

function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const { file, setFile } = useState(null);
  const [desc, setDesc] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc,
    };
    try {
      await axios.post("/posts", newPost);
      setDesc("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="share-profile-img"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.jpeg"
            }
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user.username}?`}
            className="share-input"
            // ref={desc}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr className="share-hr" />
        <form className="share-bottom" onSubmit={handleSubmit}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="share-option">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <Room htmlColor="green" className="share-icon" />
              <span className="share-option-text">Locations</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-btn" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
