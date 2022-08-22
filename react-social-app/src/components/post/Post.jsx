import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/user?userId=${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);
  async function likeHandler() {
    try {
      await axios.put("/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-topleft">
            <Link to={`profile/${user.username}`}>
              <img
                className="post-profile-img"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="post-username">{user.username}</span>
            <span className="post-date">{format(post.createdAt)}</span>
          </div>
          <div className="post-topright">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className="post-img" src={PF + post.img} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottomleft">
            <img
              onClick={likeHandler}
              className="like-icon"
              src={PF + "like.png"}
              alt=""
            />
            <img
              onClick={likeHandler}
              className="like-icon"
              src={PF + "heart.png"}
              alt=""
            />
            <span className="post-like-counter">{like} people like it</span>
          </div>
          <div className="post-bottomright">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
