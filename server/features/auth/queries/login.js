import UserModel from "../../users/user-model.js";
import formatAuthResponse from "../helpers/formatAuthResponse.js";

const login = async (req, res) => {
   const { email, password } = req.body;

   if (!email) {
      return res.status(400).json({ message: "email field cannot be empty!" });
   }
   if (!password) {
      return res
         .status(400)
         .json({ message: "password field cannot be empty!" });
   }

   const newUser = await UserModel.findOne({ email });
   if (!newUser || !newUser.isCorrectPassword(password)) {
      return res.status(401).json({ message: "Incorrect email or password" });
   }
   return res.status(200).json(formatAuthResponse(newUser));
};

export default login;
