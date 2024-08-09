import BusinessModel from "../business-model.js";

const createBusiness = async (req, res) => {
   const {
      service, name, person, address, image,
   } = req.body;

   if (!service) {
      return res
         .status(400)
         .json({ message: "service field cannot be empty!" });
   }
   if (!name) {
      return res.status(400).json({ message: "name field cannot be empty!" });
   }
   if (!person) {
      return res.status(400).json({ message: "person field cannot be empty!" });
   }
   if (!address) {
      return res
         .status(400)
         .json({ message: "address field cannot be empty!" });
   }
   if (!image) {
      return res.status(400).json({ message: "image field cannot be empty!" });
   }

   const businessProps = {
      service,
      name,
      person,
      address,
      image,
   };

   const newBusiness = await BusinessModel.create(businessProps);
   return res.status(200).json(newBusiness);
};

export default createBusiness;
