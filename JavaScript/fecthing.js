let url = "https://dummyjson.com/products/1";
async function fetchingData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.tags);
  } catch (error) {
    console.error(error);
  }
}
fetchingData(url);

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => console.log("final statement"));
