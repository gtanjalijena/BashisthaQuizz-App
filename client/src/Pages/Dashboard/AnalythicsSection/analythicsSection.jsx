import React from "react";
import "./analythicsSection.moudle.css";
import { Link } from "react-router-dom";
const AnalythicsSection = () => {
  return (
    <div className="analythics_Container">
      <h1>Quiz Analytics</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Auiz Name</th>
            <th>Created on</th>
            <th>Impression</th>
            <th>Edit</th>
            <th>Analisis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 1</td>
            <td>try</td>
            <td>1/16/2024</td>
            <td>2</td>
            <td>
              <i className="fa-regular fa-pen-to-square"></i>{" "}
              <i className="fa-solid fa-trash"></i>{" "}
              <i className="fa-solid fa-share-nodes"></i>
            </td>
            <td>
              <ul>
                {" "}
                <Link>Question Wise Analysis</Link>{" "}
              </ul>
            </td>
          </tr>
          <tr>
            <td> 1</td>
            <td>try</td>
            <td>1/16/2024</td>
            <td>2</td>
            <td>
              <i className="fa-regular fa-pen-to-square"></i>{" "}
              <i className="fa-solid fa-trash"></i>{" "}
              <i className="fa-solid fa-share-nodes"></i>
            </td>
            <td>
              <ul>
                {" "}
                <Link>Question Wise Analysis</Link>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AnalythicsSection;
