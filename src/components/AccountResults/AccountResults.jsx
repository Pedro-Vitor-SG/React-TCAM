import React from "react";
import "./AccountResults.css";

const AccountResults = (props) => {

  return (
    <section className="container_results">
      <div className="results_final">
        <div className="tip">
          <p>
            Tip Amount<span>/ person</span>{" "}
          </p>
          <strong>
            $
            {props.valores.valorGorjeta > 0
              ? props.valores.valorGorjeta.toFixed(2)
              : "0.00"}
          </strong>
        </div>
        <div className="total">
          <p>
            Total<span>/ person</span>
          </p>
          <strong>
            ${props.valores.valorTotal > 0 ? props.valores.valorTotal.toFixed(2) : "0.00"}
          </strong>
        </div>
      </div>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
};

export default AccountResults;
