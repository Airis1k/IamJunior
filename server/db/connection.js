import mongoose from "mongoose";
import { envVariables } from "../config/index.js";

const connectToDb = (successCallback) => {
   mongoose.connect(envVariables.ATLAS_URI).then(() => {
      // eslint-disable-next-line no-console
      console.log("Successfully connected to MongoDB");
      successCallback();
   });
};

export default connectToDb;
