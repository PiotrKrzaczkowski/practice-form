import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const admin = {
    email: "slim@wp.pl",
    password: "111",
  };

  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const loginFn = (details) => {
    console.log("pizdziocha");
  };

  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="welcome">
          <h1>witaj {user.name}</h1>
          <button>Logout</button>
        </div>
      ) : (
        <Form loginFn={loginFn} />
      )}
    </div>
  );
}

export default App;
