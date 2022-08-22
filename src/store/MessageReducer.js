import { MESSAGE_CHAT, ADD_NEW_MESSAGE } from "./types/types";

const initialState = {
  firstchat: [{ id: 0, name: "Олег", text: "Привет" }],
  secondchat: [
    { id: 0, name: "Борис", text: "Ку-ку" },
    { id: 1, name: "Степан", text: "Ку" },
  ],
};

const MessageReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case MESSAGE_CHAT:
      return { ...state };
    case ADD_NEW_MESSAGE:
      if (state[payload.chatName] !== undefined) {
        return {
          ...state,
          [payload.chatName]: [
            ...state[payload.chatName],
            {
              id: state[payload.chatName].length,
              name: payload.name,
              text: payload.text,
            },
          ],
        };
      } else {
        return {
          ...state,
          [payload.chatName]: [
            { id: 0, name: payload.name, text: payload.text },
          ],
        };
      }
    default:
      return state;
  }
};

export default MessageReducer;
