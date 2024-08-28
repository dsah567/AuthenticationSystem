import { User } from "../models/user.model.js";


const register = async (req,res)=>{
    const { username, email, name, password } = req.body;
    console.log(username, email, name, password);

  if ([name, email, username, password].some((field) => field?.trim() === "")) {
    return res.status(400).json({ errors: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ errors: "Enter Valid email" });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({ errors: "Password length should be minimum of 6" });
    }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    return res.status(409).json({ errors: "User with email or username already exists" });
  }

  const user = await User.create({
    name,
    email,
    password,
    username,
  });
  console.log(user);
  const createdUser = await User.findById(user._id).select(
    "-password"
  );

  if (!createdUser) {
    return res.status(500).json({ errors: "Something went wrong while registering the user" });
  }

  return res
    .status(201)
    .json({success : "User is created"});
}


const login = async (req,res)=>{
    return res.send("login")
}


const resetPassword = async (req,res)=>{
    return res.send("restpassword")
}

export {register,
        login,
        resetPassword}