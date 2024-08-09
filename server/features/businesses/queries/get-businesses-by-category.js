import BusinessModel from "../business-model.js";

const getBusinessesByCategory = async (req, res) => {
   const { category } = req.params;

   const capitalizedString = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

   const businesses = await BusinessModel.find({ service: capitalizedString });
   res.status(200).json(businesses);
};

export default getBusinessesByCategory;
