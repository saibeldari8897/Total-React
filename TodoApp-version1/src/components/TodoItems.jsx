import TodoItem1 from "./TodoItem1";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem1 todoName={item.Name} todoDate={item.Date}></TodoItem1>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
