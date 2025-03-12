import { useReducer, useState } from "react";

const foodItemsReducer = (currFoodItems, action) => {
  let foodItems = currFoodItems;
  if (action.type === "NEW_ITEM") {
    foodItems = [...foodItems, action.payload.itemName];
  } else if (action.type === "DEL_ITEM") {
    foodItems = foodItems.filter(
      (fooditem) => fooditem !== action.payload.itemName
    );
  }
  return foodItems;
};

const ItemList = () => {
  //let foodItems = ["first item", "second item", "third item"];

  const [foodItems, dispatchFoodItems] = useReducer(foodItemsReducer, []);

  //const [foodItems, setFoodItems] = useState([]);
  const handleEnter = (event) => {
    if (event.key == "Enter") {
      let newItems = {
        type: "NEW_ITEM",
        payload: {
          itemName: event.target.value,
        },
      };
      dispatchFoodItems(newItems);
    }
  };
  const deleteListItem = (item) => {
    let newItems = {
      type: "DEL_ITEM",
      payload: {
        itemName: item,
      },
    };
    dispatchFoodItems(newItems);
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
};
export default ItemList;
