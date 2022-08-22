import { ADD_CHAT, DELETE_CHAT } from "../types/types";

export const addChat = (value) => ({
  type: ADD_CHAT,
  payload: value,
});
export const delChat = (value) => ({
  type: DELETE_CHAT,
  payload: value,
});
