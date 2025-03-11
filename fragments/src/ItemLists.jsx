import { useState } from "react";

function ItemList() {
  //let foodItems = ["first item", "second item", "third item"];

  const [foodItems, setFoodItems] = useState([]);
  const handleEnter = (event) => {
    if (event.key == "Enter") {
      let newUtem = [...foodItems, event.target.value];
      setFoodItems(newUtem);
    }
  };
  const deleteListItem = (item) => {
    let newItems = foodItems.filter((fooditem) => fooditem !== item);
    setFoodItems(newItems);
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter the  food item"
        onKeyDown={handleEnter}
      />
      {foodItems.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteListItem(item)}>delete</button>
        </li>
      ))}
    </>
  );
}
export default ItemList;
