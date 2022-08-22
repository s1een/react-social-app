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
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feed-wrapper">
        {(!username || username === user.username) && <Share />}
        {posts.length ? (
          posts.map((el) => <Post key={el._id} post={el} />)
        ) : (
          <div className="post">
            <div className="post-wrapper">
              <h2 style={{ textAlign: "center" }}>NO POSTS YET!</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feed;
