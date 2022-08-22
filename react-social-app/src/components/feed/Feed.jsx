import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get(`posts/timeline/${user._id}`);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((el) => (
          <Post key={el._id} post={el} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
