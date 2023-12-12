import { createContext, useReducer } from "react";
import Component from "./component1";
import Component1 from "./component2";

export const Tools = createContext();
const dataReducer = (currName, action) => {
  let printName = currName;
  if (action.type === "newName") {
    printName = [...currName, action.payload];
  }
  return printName;
};

const Component2 = () => {
  const [data, dispatchData] = useReducer(dataReducer, []);
  const addName = (newName) => {
    dispatchData({
      type: "newName",
      payload: newName,
    });
  };
  return (
    <Tools.Provider value={{ data, addName }}>
      <center>
        <Component1></Component1>
        <Component></Component>
      </center>
    </Tools.Provider>
  );
};
export default Component2;
