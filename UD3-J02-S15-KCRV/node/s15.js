const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

//ESTA ES LA WEB
const server = http.createServer((req, res) =>{
  res.statusCode.Code = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Katherine Cristina Reyes Vega");
})

// ESTA ES LA CONSOLA
server.listen(port, hostname, () =>{
  console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
});