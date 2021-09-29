import React from "react";
import "./PeopleNumber.css";

import iconPerson from "../../images/icon-person.svg";

const PeopleNumber = (props) => {
  return (
    <div className="container_people">
      <div className="texts">
        <p> Number of People</p>
        {props.pessoas <= 0 ? <p className="red">Can't be zero</p> : ""}
      </div>
      <div className="container_inputNumberPeople">
        <img src={iconPerson} alt="" />
        <input
          type="number"
          value={props.pessoas}
          onChange={props.setPessoas}
        />
      </div>
    </div>
  );
};

export default PeopleNumber;
