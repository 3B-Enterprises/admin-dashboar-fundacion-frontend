import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({children }) => {
  const isAuthemticated = window.localStorage.getItem("TOKEN");
  if (isAuthemticated === null) {
    <Navigate to="/"/>
  }
  return children;
};
