const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function checkDatabaseConnection() {
    try {
        // Perform a simple query to test the connection
        await prisma.$queryRaw`SELECT 1+1`
        console.log("\nPRISMA: Database connection successful")
    } catch (error) {
        console.error("\nPRISMA: Error connecting to the database: ", error)
        throw error
    }
}

module.exports = { checkDatabaseConnection }
