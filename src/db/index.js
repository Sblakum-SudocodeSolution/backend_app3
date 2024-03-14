import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );
    console.log("Error : ", connectionInstance.connection.host);
  } catch (error) {
    console.log("Error : ", error);
    process.exit(1);
  }
};

export default dbConnect;
