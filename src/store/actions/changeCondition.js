import { CHANGE_CONDITION } from "../types/types";

export const changeCondition = (value) => ({
  type: CHANGE_CONDITION,
  payload: value,
});

export const botAnswer = () => (dispatch) => {
  setTimeout(() => {
    alert(`Состояние активно. Это круто!`);
  }, 1000);
};
