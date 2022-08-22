const { USER_LOGIN, USER_LOGOUT, SET_ERROR } = require("../types/types");

export const userLogin = (user) => ({
  type: USER_LOGIN,
  payload: { ...user },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const setError = (str) => ({
  type: SET_ERROR,
  payload: str,
});

export const fetchUser = (user) => async (dispatch) => {
  const response = await fetch("http://localhost:3001/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (response.status == 400) {
    console.log("error");
    dispatch(setError("Пользователь не найден"));
  } else {
    const data = await response.json();
    dispatch(userLogin(data));
  }
};
