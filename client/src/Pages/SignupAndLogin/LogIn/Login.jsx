import React from "react";
import LogInCss from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <form className={LogInCss.LogIn_Form}>
        <label htmlFor="Name">Email</label>
        <input type="email" name="email" />
        <br />
        <label htmlFor="Password">Password</label>
        <input type="password" name="Password" />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
