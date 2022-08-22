import { ADD_CHAT, DELETE_CHAT } from "./types/types";

const initialState = [
  { id: 0, chatName: "firstchat", name: "Чат #1" },
  { id: 1, chatName: "secondchat", name: "Чат #2" },
];

const ChatReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_CHAT:
      return [
        ...state,
        { id: payload.id, chatName: payload.chatName, name: payload.name },
      ];
    case DELETE_CHAT:
      return [...state.filter((el) => el.id !== payload)];
    default:
      return state;
  }
};

export default ChatReducer;
