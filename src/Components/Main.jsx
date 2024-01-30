import Card from "./Card";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [cards, setCards] = useState([]);
  const getCards = async () => {
    const res = await fetch(
      "https://frontend-mentor-apis-6efy.onrender.com/devjobs"
    );
    const data = await res.json();
    cards.map((card) => {
      console.log(card.location);
    });
    setCards(data);
  };

  useEffect(() => {
    getCards();
  }, []);
  return (
    <div className="container">
      <Card />
    </div>
  );
};

export default Main;
