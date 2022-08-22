import { SPINNER_FLG } from "./types/types";

const initialState = {
  spinnerFlg: false,
};

const SpinnerReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SPINNER_FLG:
      return {
        ...state,
        spinnerFlg: !state.spinnerFlg,
      };
    default:
      return state;
  }
};

export default SpinnerReducer;
