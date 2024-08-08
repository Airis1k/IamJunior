import mongoose from "mongoose";
import { envVariables } from "../config/index.js";

const connectToDb = (successCallback) => {
   mongoose.connect(envVariables.ATLAS_URI).then(() => {
      console.log("Successfully connected to MongoDB");
      successCallback();
   });
};

export default connectToDb;
