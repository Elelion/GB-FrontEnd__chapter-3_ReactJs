import { SET_ERROR, USER_LOGIN, USER_LOGOUT } from "./types/types";

const initialState = { user: null, error: null };

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGOUT:
      return { error: null, user: null };
    case USER_LOGIN:
      return { user: payload, error: null };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default userReducer;
