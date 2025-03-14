const result = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const sumResult =
      Number(bodyObj.firstNumber) + Number(bodyObj.secondNumber);
    res.setHeader("content-type", "text/html");
    res.write(`<h1>result is${sumResult}</h1>
      `);
    return res.end();
  });
};
module.exports = result;
