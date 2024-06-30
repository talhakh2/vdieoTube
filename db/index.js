import mongoose from "mongoose";
import {DB_NAME} from '../src/constants.js'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection ERROR: ", error);
        throw err
    }
}

export default connectDB