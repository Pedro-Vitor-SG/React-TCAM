import React from "react";
import "./TipPercentage.css";

const TipPercentage = (props) => {
  return (
    <div className="container_percentage">
      <p> Select Tip % </p>
      <div className="container_choice">
        <button className="five" onClick={() => props.calcularPorcento(5)}>
          5%
        </button>
        <button className="ten" onClick={() => props.calcularPorcento(10)}>
          10%{" "}
        </button>
        <button className="fifteen" onClick={() => props.calcularPorcento(15)}>
          15%
        </button>
        <button
          className="twentyfive"
          onClick={() => props.calcularPorcento(25)}
        >
          25%
        </button>
        <button className="fifty" onClick={() => props.calcularPorcento(50)}>
          50%
        </button>{" "}
        <input
          type="number"
          placeholder="Custom"
          onChange={(e) => props.calcularPorcento(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TipPercentage;
