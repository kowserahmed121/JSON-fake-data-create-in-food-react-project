import "./food.css";
const Food = ({ food, handleFood }) => {
  const { name, type, price, image } = food;
  return (
    <div className="food-style">
      <img src={image} alt="" />
      <h2>Food: {name}</h2>
      <div className="flex">
        <p>Price: {price}</p>
        <p>Type: {type}</p>
      </div>
      <button onClick={() => handleFood(food)}>add cart</button>
    </div>
  );
};

export default Food;
