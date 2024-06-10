import User from "../../../DB/Models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const usedEmail = await User.findOne({where:{email}})
  if(usedEmail) return res.json({ message: "This email is already in use"});
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt)
  const newUser = await User.create({
    username,
    email,
    password:hashedPassword,
  });
  return res.json({ message: "You registerd successfully", newUser });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findAll({ where: { email, password } });
  console.log(foundUser);
  if (foundUser[0]) {
    return res.json({ message: "Login successful" });
  }
else
  return res.json({ message: "User not found" });
};

export const logOut = (req,res)=>{

}

// export const  