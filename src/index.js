const express = require('express')
const cors = require('cors')
const configs = require('./config')

port = configs.port

const app = express()

app.use(express.json())
app.use(cors())


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

app.get("/", (request, response) => {
  response.send("Bem vindo a CorinthiansAPI")
})

const corinthiansRoutes = require('./routes/corinthians-routes')

app.use("/api", corinthiansRoutes.routes)