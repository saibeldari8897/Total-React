import TodoItem1 from "./TodoItem1";
function TodoItems() {
  let ListItems = [
    {
      todoname: "do exercise",
      tododate: "24/11/2023",
    },
    {
      todoname: "go to exercise",
      tododate: "25/11/2023",
    },
  ];
  return (
    <>
      <div className="items-container">
        <TodoItem1
          todoName={ListItems.todoName}
          todoDate={ListItems.todoDate}
        ></TodoItem1>
        <TodoItem1 todoName="play cricket" todoDate="24/11/2023"></TodoItem1>
      </div>
    </>
  );
}
export default TodoItems;
