import { useEffect } from "react";
import { useState } from "react";
import Food from "../food/food";
import "./component.css";
const Components = () => {
  const [foods, setFoods] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleFood = (food) => {
    const newFood = [...card, food];
    setCard(newFood);
  };
  return (
    <div>
      <h3>food card : {card.length}</h3>
      <div className="grid-food">
        {card.map((card) => (
          <div className="single-card">
            <li className="li-non"> food name : {card.name}</li>
            <img src={card.image} alt="" />
          </div>
        ))}
      </div>
      <div className="grid">
        {foods.map((food) => (
          <Food key={food.id} food={food} handleFood={handleFood}></Food>
        ))}
      </div>
    </div>
  );
};

export default Components;
