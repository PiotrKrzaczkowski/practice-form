import React, { useState } from "react";

const Form = ({ loginFn, error }) => {
  const [user, setUser] = useState({ name: "", password: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFn(user);
    setUser({ name: "", password: "", email: "" });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    if (name === "name") setUser({ ...user, name: e.target.value });
    if (name === "email") setUser({ ...user, email: e.target.value });
    if (name === "password") setUser({ ...user, password: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login form</h2>
      {error && <h3>{error}</h3>}
      <div className="inputs">
        <div className="input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={handleChange}
            name="name"
            className="ipt"
          />
        </div>
        <div className="input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            name="email"
            className="ipt"
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            className="ipt"
          />
        </div>
      </div>
      <button className="submit-btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default Form;
