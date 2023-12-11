const Component = () => {
  return (
    <>
      <div>
        {arrayNams.map((names) => (
          <h3 key={names}>{names}</h3>
        ))}

        <input type="text" placeholder="Enter your Name" />
        <input type="submit" value="add" />
      </div>
    </>
  );
};
const arrayNams = [
  {
    Name: "sai",
    Name1: "krishnamma",
  },
];
export default Component;
