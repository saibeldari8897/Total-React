import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  let todoItems = [
    {
      Name: "do exercise",
      Date: "24/11/2023",
    },
    {
      Name: "go to exercise",
      Date: "25/11/2023",
    },
    {
      Name: "Attend the meeting",
      Date: "26/11/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
