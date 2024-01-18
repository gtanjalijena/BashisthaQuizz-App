import React from "react";
import HomeLeftCss from "./homeLeftSide.module.css";
import { useContext } from "react";
import MyContext from "../../../Contextapi/MyContext";

const DashLeftSide = () => {
  const { sectionSelected, setSectionSelected } = useContext(MyContext);

  return (
    <div className={HomeLeftCss.DAC_OptionsContainer}>
      <nav>QUIZZE</nav>
      <main>
        <h3
          className={
            sectionSelected === "DashSection" && HomeLeftCss.DashSection
          }
          onClick={() => setSectionSelected("DashSection")}
        >
          Dashboard
        </h3>
        <h3
          className={
            sectionSelected === "AnalythicsSection" &&
            HomeLeftCss.AnalythicsSection
          }
          onClick={() => setSectionSelected("AnalythicsSection")}
        >
          Analythics
        </h3>
        <h3
          className={
            sectionSelected === "CreateQuizSection" &&
            HomeLeftCss.CreateQuizSection
          }
          onClick={() => setSectionSelected("CreateQuizSection")}
        >
          Create Quiz
        </h3>
      </main>
      <footer>
        <h4 className={HomeLeftCss.Logout}>LOGOUT</h4>
      </footer>
    </div>
  );
};

export default DashLeftSide;
