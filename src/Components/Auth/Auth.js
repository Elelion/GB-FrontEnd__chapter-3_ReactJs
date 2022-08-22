import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser } from "../../store/actions/userAction";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFlg, setErrorFlg] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { error, user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (error) {
      setEmail("");
      setPassword("");
      setErrorFlg((prev) => !prev);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      history.push("/chats");
    }
  }, [user]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setErrorFlg(false);
    dispatch(fetchUser({ email, password }));
    history.push("/chats");
  };
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
      {errorFlg && <div>Введён неверный логин или email</div>}
    </>
  );
};

export default Auth;
