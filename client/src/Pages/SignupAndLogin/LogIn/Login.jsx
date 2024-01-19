import React, { useState } from "react";
import LogInCss from "./Login.module.css";
import { enterDetails, submitForm } from "./Login.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [UserDetails, setUserdetails] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const handleEnterDetails = (e) => enterDetails(e, setUserdetails);
  //handel form submit
  const handleSubmitForm = async (event) => {
    try {
      const LogIn_Response = await submitForm(event, UserDetails);
      console.log("result from function to ui:- ", LogIn_Response);

      if (LogIn_Response.status && LogIn_Response.status === 200) {
        toast.success(LogIn_Response.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        // storing jet tokein in session storage.
        console.log("jwttoken:- ", LogIn_Response.data.jwttoken);
        sessionStorage.setItem(
          "jwttoken",
          JSON.stringify(LogIn_Response.data.jwttoken)
        );

        setTimeout(() => {
          Navigate("/home");
        }, 2000);
      } else {
        toast.error(LogIn_Response.response.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log("handleSubmitForm:-", error);

      toast.error("Unable to Login try agin.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <form className={LogInCss.LogIn_Form} onSubmit={handleSubmitForm}>
        <label htmlFor="Name">Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleEnterDetails}
          value={UserDetails.email}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="text"
          name="password"
          required
          onChange={handleEnterDetails}
          value={UserDetails.password}
        />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
