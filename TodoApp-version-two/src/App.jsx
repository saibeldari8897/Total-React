import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/welcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (todoName, todoDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { Name: todoName, Date: todoDate },
    ]);
  };
  const deleteItem = (todoItemName) => {
    const newTodoitems = todoItems.filter((item) => item.Name !== todoItemName);
    setTodoItems(newTodoitems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems todoItems={todoItems} onClickDelete={deleteItem}></TodoItems>
    </center>
  );
}

export default App;
