// let promise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Operation was successful");
//   } else {
//     reject("Operation failed");
//   }
// });

// promise
//   .then((message) => {
//     console.log(message); // Logs "Operation was successful"
//   })
//   .catch((error) => {
//     console.error(error); // If rejected, logs the error
//   })
//   .finally(() => {
//     console.log("Operation completed"); // Always runs after then/catch
//   });
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url) // Initiates a GET request to the provided URL
      .then((response) => {
        // Check if the response is OK (status code 200–299)
        if (response.ok) {
          return response.json(); // Parse the response as JSON
        } else {
          reject(`Error: ${response.status}`); // Reject if response is not OK
        }
      })
      .then((data) => {
        resolve(data); // Resolve the promise with the parsed data
      })
      .catch((error) => {
        reject(`Fetch error: ${error}`); // Catch and reject any network errors
      });
  });
}

// Usage example
fetchData("https://dummyjson.com/products/1")
  .then((data) => {
    console.log("API Data:", data); // Handle the successful response
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors
  });
