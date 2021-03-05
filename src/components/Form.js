import React, { useState } from "react";

const Form = ({ loginFn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    loginFn();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login form</h2>
      <div className="inputs">
        <div className="input">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="input">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="input">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
