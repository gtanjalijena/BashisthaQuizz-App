import React, { useState } from "react";
import { useContext } from "react";
import MyContext from "../../../Contextapi/MyContext";
import QuizDetails from "./QuizDetailsForm/quizDetails";
import CreateQuizCss from "./createSection.module.css";

function CreateSection() {
  const { setSectionSelected } = useContext(MyContext);
  const [selectAQuizType, setSelectAQuizType] = useState("Q&A");
  const [quizName, setQuizName] = useState("");
  const [openQuizForm, setOpenQuizForm] = useState(true);

  console.log("QuizName:-", quizName);
  console.log("selectAQuizType:-", selectAQuizType);

  return (
    <div className={CreateQuizCss.CreateQuiz_Container}>
      {!openQuizForm && (
        <div className={CreateQuizCss.whitePopUp_Box}>
          <input
            placeholder="Quiz name"
            type="text"
            className={CreateQuizCss.QuizName_Input}
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
          />
          <div className={CreateQuizCss.Quiz_Poll_Type_Div}>
            <p>Quiz Type</p>
            <button
              onClick={() => setSelectAQuizType("Q&A")}
              className={selectAQuizType === "Q&A" && CreateQuizCss.Quiz_Button}
            >
              Q & A
            </button>
            <button
              onClick={() => setSelectAQuizType("Poll")}
              className={
                selectAQuizType === "Poll" && CreateQuizCss.Poll_Button
              }
            >
              Poll Type
            </button>
          </div>
          <div className={CreateQuizCss.Continue_Calcel_buttonDIV}>
            <button onClick={() => setSectionSelected("DashSection")}>
              Cancel
            </button>
            <button onClick={() => setOpenQuizForm(true)}>Continue</button>{" "}
          </div>
        </div>
      )}
      {openQuizForm && <QuizDetails />}{" "}
    </div>
  );
}

export default CreateSection;
