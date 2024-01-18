// SomeOtherComponent.js
import React, { useState } from "react";
import useDashboard from "./Home.js";
import HomeLeftSide from "./HomeLeftSide/homeLeftSide.jsx";
import DashSection from "./DashSection/dashSection.jsx";
import AnalythicsSection from "./AnalythicsSection/analythicsSection.jsx";
import MyContext from "../../Contextapi/MyContext.js";
import CreateSection from "./CreateQuizSection/createSection.jsx";
import HomeCss from "./Home.module.css";


const SomeOtherComponent = () => {
  const { isLoggedIn, isLoading } = useDashboard();
  const [sectionSelected, setSectionSelected] = useState("DashSection");

  return (
    <MyContext.Provider value={{ sectionSelected, setSectionSelected }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        isLoggedIn && (
          <div className={HomeCss.DashBoard_Container}>
            <HomeLeftSide />
            {sectionSelected === "DashSection" && <DashSection />}
            {sectionSelected === "AnalythicsSection" && <AnalythicsSection />}
            {sectionSelected === "CreateQuizSection" && <CreateSection />}
          </div>
        )
      )}
    </MyContext.Provider>
  );
};

export default SomeOtherComponent;
