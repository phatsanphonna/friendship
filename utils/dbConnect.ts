import mongoose from 'mongoose'

const DATABASE_URL = process.env.DB_CONNECTION_URI

export const connect = async () => {
    mongoose.connect(DATABASE_URL as string).catch(err => console.log(err))
    console.log("Mongoose Connection Established")
}