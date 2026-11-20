import dotenv from 'dotenv'
import app from './src/app.js'
import connectDB from './src/config/db.js'
dotenv.config()

const startServer = async() => {
    await connectDB()

    app.listen(3000 ,() => {
        console.log("Server is Running on PORT : 3000")
    })
}

startServer()