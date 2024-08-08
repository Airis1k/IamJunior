import ServiceModel from "../category-model.js";

const getCategories = async (req, res) => {
   const categories = await ServiceModel.find();

   res.status(200).json(categories);
};

export default getCategories;
