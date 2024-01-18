// import axios from "axios";
// import serverUrl from "./serverURL";
// import { useContext } from "react";
// import MyContext from "./Contextapi/MyContext";

// const jwttoken = sessionStorage.getItem("jwttoken");

// async function IsLoggedIn() {
//   const { setIsLoggedIn } = useContext(MyContext);

//   if (!jwttoken) {
//     setIsLoggedIn(false);
//     return false; // Exit early if no jwttoken
//   }

//   try {
//     const isTokenValid = await axios.post(
//       `${serverUrl}/isAuthenticated`,
//       {},
//       {
//         headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${jwttoken}`,
//         },
//       }
//     );

//     if (isTokenValid) {
//       setIsLoggedIn(true);
//       return true; // Return true if the token is valid
//     } else {
//       setIsLoggedIn(false);
//       return false; // Return false if the token is not valid
//     }
//   } catch (error) {
//     console.error("Error checking token validity:", error);
//     setIsLoggedIn(false);
//     return false;
//   }
// }

// export default IsLoggedIn;


// // ************************************************************
