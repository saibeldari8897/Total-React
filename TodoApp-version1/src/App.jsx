import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems></TodoItems>
    </center>
  );
}

export default App;
