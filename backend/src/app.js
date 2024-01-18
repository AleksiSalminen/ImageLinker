const express = require("express")
const app = express()
const helmet = require("helmet")

const ip = "localhost"
const port = 7777

app.use(helmet())

app.listen(port, ip, () => console.log(`App listening on ${ip}:${port}\n`))
