import TodoItem1 from "./TodoItem1";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onClickDelete }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem1
            key={item.Name}
            todoName={item.Name}
            todoDate={item.Date}
            onClickDelete={onClickDelete}
          ></TodoItem1>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
