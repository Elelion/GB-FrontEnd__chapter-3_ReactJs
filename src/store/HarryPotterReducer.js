import { ADD_HP_PERSONS, CLEAR_HP_PERSONS } from "./types/types";

const initialState = [];

const HarryPotterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_HP_PERSONS:
      return [...state, payload];

    case CLEAR_HP_PERSONS:
      return (state = []);

    default:
      return state;
  }
};

export default HarryPotterReducer;
