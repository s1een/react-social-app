import "./messanger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import { io } from "socket.io-client";

function Messanger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setmessages] = useState(null);
  const { user } = useContext(AuthContext);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.senderId) &&
      setmessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    fetchConversations();
  }, [user._id]);

  async function fetchConversations() {
    try {
      const res = await axios.get(`/conversations/${user._id}`);
      setConversations(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, [currentChat]);
  async function fetchMessages() {
    try {
      const res = await axios.get("/messages/" + currentChat?._id);
      setmessages(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleSumbit(e) {
    e.preventDefault();
    const message = {
      senderId: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const reciverId = currentChat.members.find((m) => m !== user._id);
    socket.current.emit("sendMessage", {
      senderId: user._id,
      reciverId,
      text: newMessage,
    });
    try {
      const res = await axios.post("/messages", message);
      setmessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
            {conversations.map((el) => (
              <div key={el._id} onClick={() => setCurrentChat(el)}>
                <Conversation currentUser={user} conversation={el} />
              </div>
            ))}
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">
            {currentChat ? (
              <>
                <div className="chat-box-top">
                  {messages.map((el) => (
                    <div key={el._id} ref={scrollRef}>
                      <Message message={el} own={el.senderId === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chat-box-bottom">
                  <textarea
                    className="chat-input"
                    placeholder="Write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chat-submit-btn" onClick={handleSumbit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="no-conversation">
                Open A Conversation to start chat
              </span>
            )}
          </div>
        </div>
        <div className="chat-online">
          <div className="chat-online-wrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messanger;
