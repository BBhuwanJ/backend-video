import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

const app = express();

dotenv.config({
  path: "./env",
})

connectDB();



/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.listen(`App is listening on port ${process.env.PORT}`);
  } catch (error) {
    console.error(`ERROR: `, error);
    throw error;
  }
})();
*/
