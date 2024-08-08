import BusinessModel from "../business-model.js";
import mongoose from "mongoose";

const getBusinessById = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
         .status(404)
         .json({ message: "We couldn't find any business with a given id." });
   }

   const business = await BusinessModel.findById(id);

   if (!business) {
      return res
         .status(404)
         .json({ message: "We couldn't find any business with a given id." });
   }
   return res.status(200).json(business);
};

export default getBusinessById;
