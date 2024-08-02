import mongoose from "mongoose";
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   icon: {
      type: String,
      required: true,
   },
});

const Service = model("Service", serviceSchema);
export default Service;
