import React from "react";
import CreateQuizCss from "./createSection.module.css";

function CreateSection() {
  return (
    <div className={CreateQuizCss.CreateQuiz_Container}>
      <div className={CreateQuizCss.whitePopUp_Box}>
        <input type="text" />
        <div>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
        </div>
      </div>
    </div>
  );
}

export default CreateSection;
