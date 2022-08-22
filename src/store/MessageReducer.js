import { MESSAGE_CHAT } from "./types/types";

const initialState = null;

const MessageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MESSAGE_CHAT:
      return payload;
    default:
      return state;
  }
};

export default MessageReducer;
