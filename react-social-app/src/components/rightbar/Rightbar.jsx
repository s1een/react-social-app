import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthday-container">
          <img className="birthday-img" src={PF + "gift.png"} alt="" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other frineds</b> have a birthday today.
          </span>
        </div>
        <img className="rightbar-ad" src={PF + "ad.png"} alt="" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friendlist">
          {Users.map((el) => (
            <Online key={el.id} user={el} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">{user.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">{user.from}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src={PF + "person/1.jpeg"}
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src={PF + "person/2.jpeg"}
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src={PF + "person/3.jpeg"}
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src={PF + "person/4.jpeg"}
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src={PF + "person/5.jpeg"}
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              className="rightbar-following-img"
              src={PF + "person/6.jpeg"}
              alt=""
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
