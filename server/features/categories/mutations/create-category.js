import ServiceModel from "../category-model.js";

const createCategory = async (req, res) => {
   const { name, icon } = req.body;
   // TODO: Add valiation

   const categoryProps = {
      name,
      icon,
   };
   const newCategory = await ServiceModel.create(categoryProps);
   res.status(200).json(newCategory);
};

export default createCategory;
