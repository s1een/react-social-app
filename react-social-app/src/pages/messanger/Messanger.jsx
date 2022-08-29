import "./messanger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";

function Messanger() {
  return (
    <>
      <Topbar />
      <div className="messanger">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chat-menu-input"
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            <div className="chat-box-top">
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message own={true} />
              <Message />
            </div>
            <div className="chat-box-bottom">
              <textarea
                className="chat-input"
                placeholder="Write something..."
              ></textarea>
              <button className="chat-submit-btn">Send</button>
            </div>
          </div>
        </div>
        <div className="chat-online">
          <div className="chat-online-wrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messanger;
