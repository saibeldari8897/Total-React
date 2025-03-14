const http = require("http");
const calculateHandler = require("./Calculator");
const server = http.createServer(calculateHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`server running at ${port}`);
});
