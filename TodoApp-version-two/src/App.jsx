import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/welcomeMsg";
import "./App.css";
import { createContext, useReducer, useState } from "react";

export const contextProvider = createContext();
const itemsReducer = (currItems, action) => {
  let newItems = currItems;
  if (action.type === "addItem") {
    newItems = [
      ...currItems,
      { Name: action.payload.todoName, Date: action.payload.todoDate },
    ];
  } else if (action.type === "deleteItem") {
    newItems = currItems.filter(
      (item) => item.Name !== action.payload.itemName
    );
  }
  return newItems;
};

function App() {
  //const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(itemsReducer, []);

  const handleNewItem = (todoName, todoDate) => {
    const addActionItem = {
      type: "addItem",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItems(addActionItem);
  };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "deleteItem",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <contextProvider.Provider value={{ handleNewItem, todoItems, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
        <TodoItems></TodoItems>
      </center>
    </contextProvider.Provider>
  );
}

export default App;
