import mongoose from "mongoose";
const { Schema, model } = mongoose;

const businessSchema = new Schema({
   service: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   person: {
      type: String,
      required: true,
   },
   address: {
      type: String,
      required: true,
   },
   image: {
      type: String,
      required: true,
   },
});

const Business = model("Business", businessSchema);
export default Business;
