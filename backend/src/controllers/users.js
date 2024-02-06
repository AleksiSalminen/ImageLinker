const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const crypto = require("crypto")

const User = require("../models/users.js")

const secret = process.env.SECRET
const saltRounds = parseInt(process.env.SALTROUNDS)

/**
 * Create a new JSON web token and return it
 */
function createToken(id) {
    let token = jwt.sign({ id: id }, secret, { algorithm: "HS256" })
    if (token === undefined) {
        console.log("Token creation failed")
        return null
    }
    console.log("Token successfully created: " + token)
    return token
}

/**
 * Authenticate the user
 * @param {Object} request is express request object
 * @param {Object} response is express response object
 */
async function authenticate(request, response) {
    if (request.headers.authorization) {
        if (request.headers.authorization.startsWith("Bearer ")) {
            let token = request.headers.authorization.slice(7, request.headers.authorization.length)
            const decoded = jwt.verify(token, secret)
            const user = await User.findUser({ id: decoded.id })

            if (!user) {
                console.log("Authentication failed: Faulty token")
                response.sendStatus(401)
            } else {
                console.log("Authentication successful")
                return user
            }
        } else {
            console.log("Authentication failed: Faulty headers")
            response.sendStatus(401)
        }
    } else {
        console.log("Authentication failed: Authorization headers missing")
        response.sendStatus(401)
    }
}

module.exports = {
    /**
     * Log in the user
     * @param {Object} request is express request object
     * @param {Object} response is express response object
     */
    async login(request, response) {
        try {
            const userName = request.body.userName
            const password = request.body.password

            let user = await User.findUser({ userName: userName })

            if (!user) {
                console.log("Login failed: User not found\n")
                response.sendStatus(401)
            } else {
                bcrypt.compare(password, user.password, function (error, result) {
                    if (error) {
                        throw error
                    } else if (result) {
                        const token = createToken(user.id)
                        console.log(`Successfully logged in the user: ${user.user_name}\n`)
                        response.json({ token: token })
                    } else {
                        console.log("Login failed: Wrong password\n")
                        response.sendStatus(401)
                    }
                })
            }
        } catch (error) {
            console.log("Login failed")
            console.log(`CAUGHT AN ERROR: ${error}\n`)
            response.sendStatus(400)
        }
    },

    /**
     * Register a new user
     * @param {Object} request is express request object
     * @param {Object} response is express response object
     */
    async register(request, response) {
        const userName = request.body.userName

        let user = await User.findUser({ userName: userName })
        if (user) {
            response.sendStatus(400)
            console.log("Could not register: User with the given user name already exists")
            return
        } else {
            try {
                bcrypt.hash(request.body.password, saltRounds, async function (error, hash) {
                    if (error) {
                        throw error
                    }

                    let id = null
                    let idGenerated = false

                    while (!idGenerated && !id) {
                        id = crypto.randomBytes(10).toString("hex")
                        user = await User.findUser({ id: id })
                        if (!user) {
                            idGenerated = true
                        }
                    }

                    let newUser = {
                        id: id,
                        name: "",
                        email: "",
                        userName: userName,
                        password: hash,
                    }

                    const results = await User.addUser(newUser)
                    if (results.affectedRows === 0) {
                        throw Error("Could not add user")
                    } else {
                        console.log(`Successfully registered a new user: ${newUser.userName}\n`)
                    }

                    const token = createToken(newUser.id)
                    response.json({ token: token })
                })
            } catch (error) {
                console.log("Registration failed")
                console.log(`CAUGHT AN ERROR: ${error}\n`)
                response.sendStatus(400)
            }
        }
    },

    /**
     * Unregisters the user
     * @param {Object} request is express request object
     * @param {Object} response is express response object
     */
    async unregister(request, response) {
        authenticate(request, response).then(async function (user) {
            if (!user) {
                console.log("Unregistering failed\n")
                response.sendStatus(400)
            } else {
                const results = await User.deleteUser(user.id)

                if (results.affectedRows === 0) {
                    console.log("Unregistering failed\n")
                    response.sendStatus(500)
                } else {
                    console.log("Successfully unregistered\n")
                    response.json({})
                }
            }
        })
    },

    /**
     * Gets the user's own information
     * @param {Object} request is express request object
     * @param {Object} response is express response object
     */
    async getOwnInfo(request, response) {
        authenticate(request, response).then(async function (user) {
            if (!user) {
                console.log("Retrieving user's own info failed\n")
                response.sendStatus(400)
            } else {
                console.log("User's own info successfully retrieved\n")
                const ownInfo = {
                    name: user.name,
                    userName: user.user_name,
                    email: user.email,
                }
                response.json(ownInfo)
            }
        })
    },

    /**
     * Updates user's own information
     * @param {Object} request is express request object
     * @param {Object} response is express response object
     */
    async updateOwnInfo(request, response) {
        authenticate(request, response).then(async function (user) {
            if (!user) {
                console.log("User's own info update failed\n")
                response.sendStatus(400)
            } else {
                const userName = request.body.userName
                let foundUser = await User.findUser({ userName: userName })
                if (userName !== user.user_name && foundUser) {
                    response.sendStatus(400)
                    console.log("Could not update info: User with the new user name already exists")
                    return
                } else {
                    try {
                        bcrypt.hash(request.body.password, saltRounds, async function (error, hash) {
                            if (error) {
                                throw Error(error)
                            }

                            const newInfo = {
                                id: user.id,
                                name: user.name,
                                userName: request.body.userName,
                                email: user.email,
                                password: hash,
                                tier: user.tier,
                                payMethod: user.pay_method,
                            }

                            let results = await User.updateUser(newInfo)

                            if (results.affectedRows === 0) {
                                response.sendStatus(400)
                                console.log("User's own info update failed\n")
                            } else {
                                response.json(newInfo)
                                console.log("Successfully updated user's own info\n")
                            }
                        })
                    } catch (error) {
                        response.sendStatus(500)
                        console.log("User's own info update failed")
                        console.log("Caught an error: " + error + "\n")
                    }
                }
            }
        })
    },

    authenticate,
}
