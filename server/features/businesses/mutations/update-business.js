import BusinessModel from "../business-model.js";
import mongoose from "mongoose";

const updateBusiness = async (req, res) => {
   const { id } = req.params;
   const { service, name, person, address, image } = req.body;

   // TODO: Add validation

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
         .status(404)
         .json({ message: "We couldn't find any business with a given id." });
   }

   try {
      const updatedBusiness = await BusinessModel.findByIdAndUpdate(
         id,
         { service, name, person, address, image },
         { new: true }
      );

      if (!updatedBusiness) {
         return res.status(404).json({
            message: "We couldn't find any business with a given id.",
         });
      }

      return res.status(200).json(updatedBusiness);
   } catch (err) {
      return res
         .status(500)
         .json({ message: "Server error", error: err.message });
   }
};

export default updateBusiness;
