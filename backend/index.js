const http = require('http')
const server = http.createServer((request, response) => {
    console.log(response.prototype)
     response.write("Request received")
     response.end()
})

server.listen(8080, () => (console.log("server is running on port 8080")))