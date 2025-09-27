const userModel = require("./models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const isUserAlreadyExist = await userModel.findOne({ email });
    if (isUserAlreadyExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const user = new userModel({
      fullname,
      email,
      password: hashPassword,
    });
    await user.save();

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "defaultSecret", // Use .env instead
      { expiresIn: "1d" }
    );

    // Set cookie
    res.cookie("token", token, { httpOnly: true, secure: false });

    // Send response
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      }
    })
  };

  async function loginUser(req, res) {}

module.exports = {
  registerUser,
  loginUser,
 ...restOfTheFunctionality
}

module.exports = registerUser;
