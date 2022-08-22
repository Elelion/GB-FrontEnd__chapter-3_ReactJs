import { SPINNER_FLG } from "../types/types";

export const useSpinner = (value) => ({
  type: SPINNER_FLG,
  payload: value,
});
