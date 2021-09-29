import React from "react";
import "./AccountAmount.css";

import iconDollar from "../../images/icon-dollar.svg";
const AccountAmount = (props) => {
  return (
    <section className="section_container">
      <p>Bill</p>
      <div className="account_container">
        <img src={iconDollar} alt="Icone Dóllar" />
        <input type="number" value={props.number} onChange={props.setNumber} />
      </div>
    </section>
  );
};

export default AccountAmount;
