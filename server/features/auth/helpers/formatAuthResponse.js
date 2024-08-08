import generateToken from "./generateToken.js";

const formatAuthResponse = (userDoc) => {
   const token = generateToken({ id: userDoc._id });

   return {
      token,
      user: {
         id: userDoc._id,
         name: userDoc.name,
         email: userDoc.email,
         age: userDoc.age,
      },
   };
};

export default formatAuthResponse;
