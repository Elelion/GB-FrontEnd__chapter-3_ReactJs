const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

const users = [
  { email: "1@1.ru", password: "1" },
  { email: "2@2.ru", password: "2" },
];

let chats = [
  { id: 0, chatName: "firstchat", name: "Чат #1" },
  { id: 1, chatName: "secondchat", name: "Чат #2" },
];

const messages = {
  firstchat: [{ id: 0, name: "Олег", text: "Привет" }],
  secondchat: [
    { id: 0, name: "Борис", text: "Ку-ку" },
    { id: 1, name: "Степан", text: "Ку" },
  ],
};

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        return res.json(users[i]);
      }
    }
  }
  res.sendStatus(400);
});

app.get("/chats", (req, res) => {
  res.json(chats);
});

app.post("/chats", (req, res) => {
  const { id, chatName } = req.body;
  chats.push({ id: id, name: chatName });
  res.json(chats);
});

app.delete("/chats", (req, res) => {
  const { id } = req.query;
  chats = chats.filter((el) => el.id !== id);
  res.json(chats);
});

app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  const { chatName, name, text } = req.body;
  if (messages[chatName] !== undefined) {
    messages[chatName].push({
      id: messages[chatName].length,
      name: name,
      text: text,
    });
  } else {
    messages[chatName] = [{ id: 0, name: name, text: text }];
  }
  res.json(messages);
});

app.listen(3001, () => {
  console.log("server works");
});
