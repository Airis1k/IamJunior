import BusinessModel from "../business-model.js";

const getBusinesses = async (req, res) => {
   const businesses = await BusinessModel.find();

   res.status(200).json(businesses);
};

export default getBusinesses;
