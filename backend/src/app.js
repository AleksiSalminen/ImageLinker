const express = require("express")
const app = express()
const helmet = require("helmet")
const { checkDatabaseConnection } = require("./prisma/connection.js")

const ip = "0.0.0.0"
const port = 7777

app.use(helmet())

/* Set up routers */
require("./router.js")(app)
console.log("\nEXPRESS: Router setup successfull")

checkDatabaseConnection()
    .then(() => app.listen(port, ip, () => console.log(`\nREST API listening on ${ip}:${port}\n`)))
    .catch((error) => console.error("Failed to start the server due to a database error: ", error))
