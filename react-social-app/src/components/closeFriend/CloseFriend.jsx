import "./closefriend.css";

function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sidebar-freind">
      <img
        className="sidebar-friend-img"
        src={
          user.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
