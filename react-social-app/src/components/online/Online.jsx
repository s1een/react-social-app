import "./online.css";
function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbar-friend">
      <div className="rightbar-profileimg-container">
        <img
          className="rightbar-profileimg"
          src={PF + user.profilePicture}
          alt=""
        />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  );
}

export default Online;
