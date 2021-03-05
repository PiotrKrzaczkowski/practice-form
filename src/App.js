import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const admin = {
    email: "slim@wp.pl",
    password: "111",
  };

  const loginFn = (user) => {
    if (user.email === admin.email && user.password === admin.password) {
      setUser(user);
      setError("");
    } else {
      setError("Email or password does not match");
    }
  };
  const logoutFn = () => {
    setUser({ name: "", password: "" });
  };

  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="welcome">
          <h1>Witaj, {user.name}</h1>
          <button className="submit-btn" onClick={logoutFn}>
            Logout
          </button>
        </div>
      ) : (
        <Form loginFn={loginFn} error={error} />
      )}
    </div>
  );
}

export default App;
