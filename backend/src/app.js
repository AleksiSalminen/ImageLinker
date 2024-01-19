const express = require("express")
const app = express()
const helmet = require("helmet")

const ip = "0.0.0.0"
const port = 7777

app.use(helmet())

/* Set up routers */
require("./router.js")(app)

app.listen(port, ip, () =>
    console.log(`\nREST API listening on ${ip}:${port}\n`)
)
