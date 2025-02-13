import { useContext } from "react";
import { Tools } from "./component3";

const Component1 = () => {
  const { data, delName } = useContext(Tools);
  return (
    <>
      {data.map((item) => (
        <h3 key={item}>
          {item}
          <button
            onClick={() => {
              console.log("clicked");
              delName(item);
            }}
          >
            Del
          </button>
        </h3>
      ))}
    </>
  );
};
export default Component1;
