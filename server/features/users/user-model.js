import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      age: {
         type: Number,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
         unique: true,
      },
   },
   {
      timestamps: true,
      versionKey: false,
   },
);

userSchema.pre("save", async function hashPasswordOnSave(next) {
   if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
   }
   next();
});

userSchema.methods.isCorrectPassword = function isCorrectPassword(password) {
   const isValid = bcrypt.compareSync(password, this.password);
   return isValid;
};

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
