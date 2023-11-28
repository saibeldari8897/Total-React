import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/welcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (todoName, todoDate) => {
    const newTodoitems = [
      ...todoItems,
      {
        Name: todoName,
        Date: todoDate,
      },
    ];
    setTodoItems(newTodoitems);
  };
  const deleteItem = (todoItemName) => {
    console.log(`${todoItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems todoItems={todoItems} onDeleteClick={deleteItem}></TodoItems>
    </center>
  );
}

export default App;
