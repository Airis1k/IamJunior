import UserModel from "../user-model.js";

const getUsers = async (req, res) => {
   const users = await UserModel.find();

   res.status(200).json(users);
};

export default getUsers;
