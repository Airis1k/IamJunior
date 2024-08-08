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

const ServiceModel = model("categories", serviceSchema);
export default ServiceModel;
