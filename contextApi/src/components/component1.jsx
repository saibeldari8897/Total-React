import { useContext, useRef } from "react";
import { Tools } from "./component3";

const Component = () => {
  const { addName } = useContext(Tools);
  const Name = useRef();
  const addButton = (event) => {
    event.preventDefault();
    const newName = Name.current.value;
    addName(newName);
    Name.current.value = "";
  };

  return (
    <>
      <form onSubmit={addButton}>
        <input ref={Name} type="text" placeholder="Enter your Name" />
        <input type="submit" value="add" />
      </form>
    </>
  );
};

export default Component;
