import React, { useState } from "react";
import SignupAndLoginCss from "./SignupAndLogin.module.css";
import SignUp from "./SignUp/SignUp.jsx";
import Login from "./LogIn/Login.jsx";

const SignupAndLogin = () => {
  const [isSignUpClicked, setisSignUpClicked] = useState(true);

  return (
    <div className={SignupAndLoginCss.MainContainer}>
      <div className={SignupAndLoginCss.SignupAndLogin_Container}>
        <h1>QUIZZIE</h1>
        <div className={SignupAndLoginCss.ChooseSingup_Or_Login_Box}>
          <button
            className={isSignUpClicked ? SignupAndLoginCss.signUp : ""}
            onClick={() => setisSignUpClicked(true)}
          >
            Sign Up
          </button>
          <button
            className={!isSignUpClicked ? SignupAndLoginCss.logIn : ""}
            onClick={() => setisSignUpClicked(false)}
          >
            Log In
          </button>
        </div>

        {isSignUpClicked ? <SignUp /> : <Login />}
      </div>
    </div>
  );
};

export default SignupAndLogin;
