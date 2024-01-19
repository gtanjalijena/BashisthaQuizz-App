import React, { useState } from "react";
import QuizDetailsCSS from "./quizDetails.module.css";

const QuizDetails = () => {
  const [selectQuestionType, setSelectQuestionType] = useState("text");
  const [single_QuestionName, setSingle_QuestionName] = useState("");
  const [selectTimer, setSelectTimer] = useState("OFF");
  const [maxQuestion, setMaxQuestion] = useState([{}]);
  const [selectedButton, setSelectedButton] = useState(0);

  let QuizQuestions_SET = [];
  let ASingle_question = {};

  //adding one round/obj when i click +
  function ClickPlus() {
    setMaxQuestion((pre) => [...pre, {}]);
    setSelectedButton(maxQuestion.length);
  }
  // changes question type to text/img etc.. ----------------------------------->
  const ChangeQuestionType = (event) => {
    setSelectQuestionType(event.target.value);
  };

  // It will delete obj from maxQuestion array if i click X ----------------------------------->
  function ClickX_To_DeleteOBJ(objIndex) {
    console.log(objIndex);
    setMaxQuestion((pre) => pre.filter((obj, index) => index !== objIndex));
  }

  // when we click a round Qn/obj it will select the button ----------------------------------->
  function SelectAQuestion(objIndex) {
    setSelectedButton(objIndex);
  }

  // ==================================== FUNCTIONS/JS END ===================================>
  return (
    <div className={QuizDetailsCSS.quizDetails_BOX}>
      <div className={QuizDetailsCSS.MaxQn_heading_div}>
        <div>
          {/* auestion button/obj */}
          {maxQuestion.map((obj, i) => (
            <button
              key={i}
              onClick={() => SelectAQuestion(i)}
              className={selectedButton === i && QuizDetailsCSS.Round_button}
            >
              {i + 1}
              {maxQuestion.length !== 1 && (
                <span
                  onClick={() => ClickX_To_DeleteOBJ(i)}
                  className={QuizDetailsCSS.MaxQuestion_CrossX}
                >
                  X
                </span>
              )}
            </button>
          ))}

          {/* if length is 5 it will not show + */}
          {maxQuestion.length !== 5 && (
            <h3
              className={QuizDetailsCSS.Increase_PlusSign}
              onClick={ClickPlus}
            >
              +
            </h3>
          )}
        </div>
        <div>Max 5 questions</div>
      </div>
      <div className={QuizDetailsCSS.Question_Name_Input_div}>
        <input
          type="text"
          placeholder="Question"
          value={single_QuestionName}
          onChange={(event) => setSingle_QuestionName(event.target.value)}
        />
      </div>
      <div className={QuizDetailsCSS.Option_TYpe_div}>
        <p>Option Type: </p>

        <p>
          <input
            type="radio"
            value="text"
            name="text"
            id="text"
            checked={selectQuestionType === "text"}
            onChange={ChangeQuestionType}
          />
          <label htmlFor="text">Text</label>{" "}
        </p>
        <p>
          <input
            type="radio"
            value="imageUrl"
            name="imageUrl"
            id="imageUrl"
            checked={selectQuestionType === "imageUrl"}
            onChange={ChangeQuestionType}
          />
          <label htmlFor="imageUrl">image URL</label>
        </p>
        <p>
          <input
            type="radio"
            value="textAndImage"
            name="textAndImage"
            id="textAndImage"
            checked={selectQuestionType === "textAndImage"}
            onChange={ChangeQuestionType}
          />

          <label htmlFor="textAndImage">Text and Image URL</label>
        </p>
      </div>
      <div className={QuizDetailsCSS.FillQuestion_Div}>
        {/* Qn input part */}
        <div>
          <p>
            <input type="radio" name="" id="" />
            <input
              type="text"
              placeholder={
                selectQuestionType !== "textAndImage"
                  ? selectQuestionType
                  : "text"
              }
            />
          </p>
          <p>
            <input type="radio" name="" id="" />
            <input
              type="text"
              placeholder={
                selectQuestionType !== "textAndImage"
                  ? selectQuestionType
                  : "text"
              }
            />
          </p>
          <p>
            <input type="radio" name="" id="" />
            <input
              type="text"
              placeholder={
                selectQuestionType !== "textAndImage"
                  ? selectQuestionType
                  : "text"
              }
            />
          </p>
          <p>
            <input type="radio" name="" id="" />
            <input
              type="text"
              placeholder={
                selectQuestionType !== "textAndImage"
                  ? selectQuestionType
                  : "text"
              }
            />
          </p>
        </div>

        {/*if Questype is  image and text part then it will appear*/}
        {selectQuestionType === "textAndImage" && (
          <div>
            <p>
              <input type="radio" name="" id="" />
              <input type="text" placeholder="Image Url" />
            </p>
            <p>
              <input type="radio" name="" id="" />
              <input type="text" placeholder="Image Url" />
            </p>
            <p>
              <input type="radio" name="" id="" />
              <input type="text" placeholder="Image Url" />
            </p>
            <p>
              <input type="radio" name="" id="" />
              <input type="text" placeholder="Image Url" />
            </p>
          </div>
        )}

        {/*Timer part */}
        <div className={QuizDetailsCSS.TimerBOx}>
          <main>
            {" "}
            <h4 className={QuizDetailsCSS.Timer_heading}>TIMER</h4>
            <p
              onClick={() => setSelectTimer("OFF")}
              className={selectTimer === "OFF" && QuizDetailsCSS.OffSelected}
            >
              OFF
            </p>
            <p
              onClick={() => setSelectTimer(5)}
              className={selectTimer === 5 && QuizDetailsCSS.FiveSEC_Selected}
            >
              5 sec
            </p>
            <p
              onClick={() => setSelectTimer(10)}
              className={selectTimer === 10 && QuizDetailsCSS.TenSEC_Selected}
            >
              10 sec
            </p>
          </main>
        </div>
      </div>
      <div className={QuizDetailsCSS.CancelCreate_div}>
        <button>Cancel</button>
        <button>Create Quiz</button>
      </div>
    </div>
  );
};

export default QuizDetails;
