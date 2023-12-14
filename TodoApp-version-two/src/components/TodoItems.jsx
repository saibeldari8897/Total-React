import { useContext } from "react";
import TodoItem1 from "./TodoItem1";
import styles from "./TodoItems.module.css";
import { contextProvider } from "../App";
const TodoItems = () => {
  const { todoItems } = useContext(contextProvider);
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem1
            key={item.Name}
            todoName={item.Name}
            todoDate={item.Date}
          ></TodoItem1>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
