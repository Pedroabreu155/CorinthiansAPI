const express = require('express')

const app = express()

app.use(express.json())

app.get("/", (request, response) => {
  response.send("Hello World")
})

app.listen(3000, () => {
  console.log("Server running on localhost:3000")
})