import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import express from "express";

const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("DB Error : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`port is runnig on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error : ", error);
    throw error;
  }
})();
