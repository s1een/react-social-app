import "./chatonline.css";
function ChatOnline() {
  return (
    <div className="chat-online">
      <div className="chat-online-friend">
        <div className="chat-online-img-container">
          <img
            className="chat-online-img"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div className="chat-online-badge"></div>
        </div>
        <span className="chat-online-name">John Doe</span>
      </div>
    </div>
  );
}

export default ChatOnline;
