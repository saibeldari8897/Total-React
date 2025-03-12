async function fetchData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.title);
    return data;
  } catch (error) {
    console.error(error);
  }
}
fetchData("https://dummyjson.com/products/1");
// .then(data=>{
//   console.log(data.title);
// });