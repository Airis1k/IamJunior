import UserModel from "../../users/user-model.js";
import formatAuthResponse from "../helpers/formatAuthResponse.js";

const register = async (req, res) => {
   const user = req.body;

   if (!user.name) {
      return res.status(400).json({ message: "name field cannot be empty!" });
   }
   if (!user.email) {
      return res.status(400).json({ message: "email field cannot be empty!" });
   }
   if (!user.password) {
      return res
         .status(400)
         .json({ message: "password field cannot be empty!" });
   }

   try {
      const existingUser = await UserModel.findOne({ email: user.email });
      if (existingUser) {
         return res.status(400).json({ message: "User already exists" });
      }

      const newUser = UserModel(user);
      await newUser.save();

      return res.status(201).json(formatAuthResponse(newUser));
   } catch (error) {
      return res.status(500).json({
         message: "Error registering a new user.",
         error: error.message,
      });
   }
};

export default register;
