import "./message.css";

function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <img
          className="message-img"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <p className="message-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quas?
        </p>
      </div>
      <div className="message-bottom">1 hour ago</div>
    </div>
  );
}

export default Message;
