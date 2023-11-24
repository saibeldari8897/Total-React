function ItemList() {
  let foodItems = ["first item", "second item", "third item"];
  return (
    <>
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </>
  );
}
export default ItemList;
