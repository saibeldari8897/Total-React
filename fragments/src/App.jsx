import "./App.css";
import ItemList from "./ItemLists";
function App() {
  return (
    <>
      <h1>Total Items</h1>
      <ul className="list-group">
        <ItemList></ItemList>
      </ul>
    </>
  );
}

export default App;
