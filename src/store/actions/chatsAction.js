import { GET_CHATS } from "../types/types";

export const getChats = (value) => ({
  type: GET_CHATS,
  payload: value,
});

export const fetchChats = () => (dispatch) => {
  fetch("http://localhost:3001/chats")
    .then((response) => response.json())
    .then((data) => dispatch(getChats(data)));
};

export const addChat = (value) => (dispatch) => {
  fetch("http://localhost:3001/chats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((data) => dispatch(getChats(data)));
};

export const delChat = (id) => (dispatch) => {
  fetch(`http://localhost:3001/chats?id=${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => dispatch(getChats(data)));
};
