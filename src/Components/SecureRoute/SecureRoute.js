import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user, "user");
  return user ? <Route {...rest} /> : <Redirect to={{ pathname: "/" }} />;
};

export default PrivateRoute;
