import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const newName = useRef("");
  const newDate = useRef("");

  const addButton = (event) => {
    event.preventDefault();
    const todoName = newName.current.value;
    const todoDate = newDate.current.value;
    onNewItem(todoName, todoDate);
    newName.current.value = "";
    newDate.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={addButton}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={newName} />
        </div>
        <div className="col-4">
          <input type="date" ref={newDate} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
