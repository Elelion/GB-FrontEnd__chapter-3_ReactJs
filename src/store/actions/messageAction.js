import { ADD_NEW_MESSAGE } from "../types/types";

export const addNewMessage = (value) => ({
  type: ADD_NEW_MESSAGE,
  payload: value,
});
