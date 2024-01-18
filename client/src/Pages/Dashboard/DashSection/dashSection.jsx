import React from "react";
import DashSectionCss from "./dashSection.module.css";

const DashRight = () => {
  return (
    <div className={DashSectionCss.DashRight_Container}>
      <div className={DashSectionCss.Quizzess_Info_div}>
        <div>
          {" "}
          <h1>0</h1> <h1>Quizess</h1> <h1>Created</h1>{" "}
        </div>
        <div>
          {" "}
          <h1>0</h1> <h1>Questions</h1> <h1>Created</h1>{" "}
        </div>
        <div>
          {" "}
          <h1>0</h1> <h1>Impressions</h1> <h1>1.2K</h1>{" "}
        </div>
      </div>
      <h2 className={DashSectionCss.Trending_div}>Trending Quiz</h2>
      <div className={DashSectionCss.All_QuizesAndPoll_div}>
        <div>
          <main>
            <h2>RE</h2>
            <p>
              6 <i className="fa-solid fa-eye"></i>
            </p>
          </main>
          <footer>Created on : jan 16, 2024</footer>
        </div>
        <div>
          <main>
            <h2>RE</h2>
            <p>
              6 <i className="fa-solid fa-eye"></i>
            </p>
          </main>
          <footer>Created on : jan 16, 2024</footer>
        </div>
        <div>
          <main>
            <h2>RE</h2>
            <p>
              6 <i className="fa-solid fa-eye"></i>
            </p>
          </main>
          <footer>Created on : jan 16, 2024</footer>
        </div>
      </div>
    </div>
  );
};

export default DashRight;
