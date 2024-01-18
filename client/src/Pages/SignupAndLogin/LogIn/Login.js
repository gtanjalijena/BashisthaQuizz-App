import axios from "axios";
import serverUrl from "../../../serverURL.js";

function enterDetails(e, setUserdetails) {
  const name = e.target.name;
  const value = e.target.value;

  setUserdetails((pre) => {
    return { ...pre, [name]: value };
  });
}

// form submit
async function submitForm(event, UserDetails) {
  event.preventDefault();
  console.log("login submitForm", UserDetails);
  try {
    //trimming password space
    UserDetails.password = UserDetails.password.trim();

    const userDetailsPosted = await axios.post(
      `${serverUrl}/login`,
      UserDetails
    );

    return userDetailsPosted;
  } catch (error) {
    return error;
  }
}

export { enterDetails, submitForm };
