import React from "react";

export const Person = (props) => {
  return (
    <div className="col">
      <div className="card" style={{width: '18rem'}}>
          <img src={props.img} className="card-img-top" alt={props.name} />
        <div>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.role}</p>
        </div>
      </div>
    </div>
  );
};
