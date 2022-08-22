import {
  GET_HP_PERSONS,
  ADD_HP_PERSONS,
  CLEAR_HP_PERSONS,
} from "../types/types";
import { useSpinner } from "./spinnerAction";

export const setHPCharacters = (character) => ({
  type: GET_HP_PERSONS,
  payload: character,
});

export const getHPCharacters = (data) => (dispatch) => {
  dispatch(useSpinner());
  fetch("http://hp-api.herokuapp.com/api/characters/")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 24; i++) {
        dispatch(addHPCharacters(data[i]));
      }
      dispatch(useSpinner());
    })
    .catch((err) => console.log(err, "Авада кедавра"));
};

export const addHPCharacters = (character) => {
  return {
    type: ADD_HP_PERSONS,
    payload: character,
  };
};

export const clearHPCharacters = (character) => {
  return {
    type: CLEAR_HP_PERSONS,
    payload: character,
  };
};
