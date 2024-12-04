import React from "react";

const Card = ({title, description, imageURL, linkSomewhere }) => {
  return (
    <div className="card mb-5" style={{width: "18rem"}}>
      <img src={imageURL} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-secondary" >{title}</h5>
        <p className="card-text" style={{color: "gray"}} >{description}
        </p>
        <a href="#" className="btn btn-info text-light opacity-75">
         <i> Dive Deeper </i>
        </a>
      </div>
    </div>
  );
};

export default Card;
