const express = require("express")
const router = express.Router()

router.route("/register").post((req, res) => res.end("REGISTER"))

router.route("/login").post((req, res) => res.end("LOGIN"))

module.exports = router
