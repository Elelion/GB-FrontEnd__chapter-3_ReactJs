import { ADD_CHAT, DELETE_CHAT, GET_CHATS } from "./types/types";

const initialState = null;

const ChatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHATS:
      return payload;
    default:
      return state;
  }
};

export default ChatReducer;
