import { useContext } from "react";
import { Tools } from "./component3";

const Component1 = () => {
  const { data } = useContext(Tools);
  return (
    <>
      {data.map((item) => (
        <h3 key={item}>{item}</h3>
      ))}
    </>
  );
};
export default Component1;
