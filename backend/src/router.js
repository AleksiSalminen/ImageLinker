const express = require("express")

// Load routers
const UsersRouter = require("./routes/users")
const ProjectsRouter = require("./routes/projects")

// Setup api router
let api = express.Router()
api.all("*", (req, res, next) => {
    console.log(`Received ${req.method} request for ${req.originalUrl}`)
    next() // Pass control to the next handler
})
api.use("/users", UsersRouter)
api.use("/projects", ProjectsRouter)

// Setup Routes
module.exports = function (app) {
    app.use("/api", api)
}
