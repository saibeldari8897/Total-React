const result = require("./result");

const calculateHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write(`<h1>Welcome to calculator</h1>
  <h2>click in the below link to navigate calculator</h2>
  <a href="/calculator">open calculator</a>`);
    return res.end();
  } else if (req.url == "/calculator") {
    res.setHeader("content-type", "text/html");
    res.write(`
      <form action="/calculate_result" method="POST">
      <input type="text" placeholder="enter firstNumber" name="firstNumber">
    <input type="text" placeholder="enter second number" name="secondNumber">
    <input type="submit" value="sum"  >
    </form>
    `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate_result" &&
    req.method === "POST"
  ) {
    return result(req, res);
  }
  res.setHeader("content-type", "text/html");
  res.write(`<h1>404 not found</h1>`);
  return res.end();
};

module.exports = calculateHandler;
