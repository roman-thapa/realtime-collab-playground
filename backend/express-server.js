const express = require("express")
const app = express()
app.use(express.json())
app.listen(8080, ()=>(console.log("server is running")))
app.get('/', (req, res) => {
    res.send("We have received your request and we acknowledge it")
})
app.post('/login', (req, res) => {
    console.log(req.body)
    res.send("we received a login request and we are processing it\n")
})