const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

function addUser(userId, socketId) {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
}

function removeUser(socketId) {
  users = users.filter((u) => u.socketId !== socketId);
}

function getUser(userId) {
  return users.find((u) => u.userId === userId);
}

io.on("connection", (socket) => {
  // connect
  console.log("user connected");
  // take userid and socket id
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  // send - get msg
  socket.on("sendMessage", ({ senderId, reciverId, text }) => {
    const user = getUser(reciverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  // disconnect
  socket.on("disconnect", () => {
    console.log("User disconneted");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
