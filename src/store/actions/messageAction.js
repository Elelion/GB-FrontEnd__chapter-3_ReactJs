import { MESSAGE_CHAT } from "../types/types";

export const setMessages = (obj) => ({
  type: MESSAGE_CHAT,
  payload: obj,
});

export const addNewMessage = (value) => (dispatch) => {
  fetch("http://localhost:3001/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((data) => dispatch(setMessages(data)));
};

export const fetchMessages = () => (dispatch) => {
  fetch("http://localhost:3001/messages")
    .then((response) => response.json())
    .then((data) => dispatch(setMessages(data)));
};
