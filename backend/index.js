const http = require('http')
const server = http.createServer()

server.listen(8080, console.log("server is running on port 8080"))