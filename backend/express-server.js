const express = require("express")
const app = express()
app.use(express.json())
app.listen(8080, ()=>(console.log("server is running")))
app.get('/', (req, res) => {
    res.send("We have received your request and we acknowledge it")
})
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).send({
      success: false,
      message: "Username missing"
    });
  }

  if (!password) {
    return res.status(400).send({
      success: false,
      message: "Password missing"
    });
  }

  if (password.length < 8) {
    return res.status(400).send({
      success: false,
      message: "Password must be at least 8 characters"
    });
  }

  return res.status(200).send({
    success: true,
    message: "Login request accepted"
  });
});
