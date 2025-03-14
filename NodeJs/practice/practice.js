const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/Home") {
    res.write(`<h1>Welcome to homepage</h1>`);
    res.end();
  }

  res.write(`
    <html lang="en">
  <head>
    <title>Myntra</title>
  </head>
  <body>
    <head>
      <nav>
        <ul>
          <li><a href="/Home">Home</a></li>

          <li><a href="/Men">Men</a></li>

          <li><a href="/women">women</a></li>

          <li><a href="/kids">kids</a></li>

          <li><a href="/adults">adults</a></li>
        </ul>
      </nav>
    </head>
  </body>
</html>    
    `);
  res.end();
});
server.listen(3000, () => {
  console.log("server running on locallhost:3000");
});
