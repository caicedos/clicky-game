import React from "react";
import "./style.css";

function characterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img  onClick={() => props.chooseCharacter(props.id, props.selected)} className="remove" alt={props.name} src={props.image} />
   
      </div>

    </div>
  );
}

export default characterCard;
