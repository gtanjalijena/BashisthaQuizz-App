import { useState } from "react";
import MyContext from "./Contextapi/MyContext";
import PageRoutes from "./Routes/PageRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <MyContext.Provider value={{ isLoggedIn, setIsLoggedIn,isLoading, setIsLoading }}>
        <PageRoutes />
      </MyContext.Provider>
    </div>
  );
}

export default App;
