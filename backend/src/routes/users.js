const express = require("express")
const router = express.Router()
const UserController = require("../controllers/users")

router.route("/login").post(UserController.login)

router.route("/register").post(UserController.register)

router.route("/me").get(UserController.getOwnInfo).put(UserController.updateOwnInfo).delete(UserController.unregister)

module.exports = router
