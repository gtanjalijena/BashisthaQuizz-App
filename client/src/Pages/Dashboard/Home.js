import axios from "axios";
import serverUrl from "../../serverURL";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import MyContext from "../../Contextapi/MyContext";

const useDashboard = () => {
  const Navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, isLoading, setIsLoading } = useContext(
    MyContext
  );

  const jwttoken = sessionStorage.getItem("jwttoken");

  useEffect(() => {
    async function test() {
      if (!jwttoken) {
        Navigate("/");
        return; 
      }

      try {
        setIsLoading(true);

        const isTokenValid = await axios.post(
          `${serverUrl}/isAuthenticated`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${jwttoken}`,
            },
          }
        );

        isTokenValid && setIsLoggedIn(true);
        isTokenValid && setIsLoading(false);
      } catch (error) {
        console.error("Error checking token validity:", error);
        setIsLoggedIn(false);
        setIsLoading(false);
        // Redirect to the home page if the token is not valid
        Navigate("/");
      }
    }

    test();
  }, [Navigate, jwttoken, setIsLoading, setIsLoggedIn]);

  return { isLoggedIn, isLoading };
};

export default useDashboard;
