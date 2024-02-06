const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function findUser(user) {
    if (user.id) {
        const userRecord = await prisma.user.findUnique({
            where: { id: user.id },
        })
        return userRecord || null
    } else if (user.userName) {
        const userRecord = await prisma.user.findUnique({
            where: { user_name: user.userName },
        })
        return userRecord || null
    } else {
        return null
    }
}

async function addUser(user) {
    const newUser = await prisma.user.create({
        data: {
            user_name: user.userName,
            name: user.name,
            email: user.email,
            password: user.password,
        },
    })
    return newUser
}

async function updateUser(user) {
    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: user.name,
            user_name: user.userName,
            email: user.email,
            password: user.password,
        },
    })
    return updatedUser
}

async function deleteUser(id) {
    const deletedUser = await prisma.user.delete({
        where: { id: id },
    })
    return deletedUser
}

module.exports = { findUser, addUser, updateUser, deleteUser }
