const http = require('http')
const server = http.createServer((request, response) => {
    console.log(request.method, request.url)
    if (request.url === '/favicon.ico') {
        response.end()
    } else if (request.url === '/') {
        response.write("We have received your request and we acknowledge it\n")
        response.end()
    }
})

server.listen(8080, () => (console.log("server is running on port 8080")))