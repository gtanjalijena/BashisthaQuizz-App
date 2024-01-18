import React from "react";
import SignUpCss from "./SignUp.module.css";
import { useState } from "react";
import { enterDetails, submitForm } from "./SignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const Navigate = useNavigate();
  const [UserDetails, setUserdetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  // Function to handle the onChange event of each input field
  const handleEnterDetails = (e) => enterDetails(e, setUserdetails);

  //handel form submit
  const handleSubmitForm = async (event) => {
    try {
      const SignIn_Response = await submitForm(event, UserDetails);
      console.log("result from function to ui:- ", SignIn_Response);

      if (SignIn_Response.status && SignIn_Response.status === 200) {
        toast.success(SignIn_Response.data.message, {
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
        console.log("jwttoken:- ", SignIn_Response.data.jwttoken);
        sessionStorage.setItem(
          "jwttoken",
          JSON.stringify(SignIn_Response.data.jwttoken)
        );

        setTimeout(() => {
          Navigate("/dashboard");
        }, 2000);
      } else {
        toast.error(SignIn_Response.response.data.message, {
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
      toast.error("Unable to send user info.", {
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
      <form className={SignUpCss.SignUp_Form} onSubmit={handleSubmitForm}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handleEnterDetails}
          value={UserDetails.name}
        />
        <br />
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
          type="password"
          name="password"
          required
          onChange={handleEnterDetails}
          value={UserDetails.password}
        />
        <br />
        <label htmlFor="Name">Confirm Password</label>
        <input
          type="text"
          name="confirmpassword"
          required
          onChange={handleEnterDetails}
          value={UserDetails.confirmpassword}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
