import React, { useContext } from "react";
import AuthContext from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  function logoutF() {
    return setAuth("");
  }

  return (
    <div>
      <h1>Home</h1>
      <p>
        You're logged in.Welcome to our website
        <strong> Mr. {auth.user} </strong>
      </p>
      <br />
      <button
        onClick={() => {
          logoutF();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}
