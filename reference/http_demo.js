//bare minimum to create server
const http = require('http');

//create server object
http.createServer((req, res) => {
  //Write response
  res.write('Hello Jabronis!');
  res.end()
}).listen(5000, () => console.log('Server running on port 5000'));