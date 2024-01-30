import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";

const Card = () => {
  const [card, setCard] = useState([]);
  const getCard = async () => {
    const res = await fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/devjobs[id]"
    );
    const data = await res.json();
    setCard(data);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="card-wrapper">
      <div className="card ">
        <div className="logo-wrapper">
          <img
            className="card-img"
            src="https://frontend-mentor-apis-6efy.onrender.com/images/dev-jobs/logos/scoot.svg"
            alt=""
          />
        </div>
        <div className="time-job">
          <p></p>
          <p>asdas</p>
        </div>
        <h3>Senior Software Engi</h3>
        <p className="company">Scoot</p>
        <span>United Kingdom </span>
      </div>
    </div>
  );
};

export default Card;
