import "../mongoConnection/mongoose.js";
import UserModel from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// +++++++++++++++++++++++++++++++*********  signUp  *********==================================================
const signupRoute = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      return res.status(400).json({ message: "Please enter all details" });
    }

    //  if both passwords are not same
    if (password !== confirmpassword) {
      return res
        .status(400)
        .json({ message: "!Password and confirm password must be same" });
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/;
    const nameRegex = /^[A-Za-z ]+$/;

    //to check a valid name
    if (!nameRegex.test(name)) {
      console.log("Please enter a valid name");
      return res.status(400).json({ message: "Please enter a valid name" });
    }
    // to check a valid email
    if (!emailRegex.test(email)) {
      console.log("Please enter a valid email");
      return res.status(400).json({ message: "Please enter a valid email" });
    }
    // to check a valid password
    if (!passwordRegex.test(password)) {
      console.log("password problem");
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and have at least one uppercase and one lowercase letter",
      });
    }

    const userEMAILexists = await UserModel.findOne({ email });
    // if user exists
    if (userEMAILexists) {
      console.log("email exists");
      return res.status(400).json({ message: "email exists" });
    } else {
      // if user doesn't exists
      const salt = bcryptjs.genSaltSync(10);
      const hashedPassword = await bcryptjs.hashSync(password, salt);

      const usercreated = await UserModel.create({
        name: name,
        email: email,
        password: hashedPassword,
      });

      // if user successfully created then
      if (usercreated) {
        const jwttoken = jwt.sign(
          usercreated.toJSON(),
          process.env.JWT_SECRET_KEY,
          { expiresIn: "40m" }
        );

        console.log("user added");
        // Set the token in the response headers
        return res
          .status(200)
          .json({ message: "User has been created", jwttoken: jwttoken });
      } else {
        console.log("User could not be created");
        return res.status(400).json({ message: "User could not be created" });
      }
    }
  } catch (error) {
    console.log("signupRoute error-", error);
    return res
      .status(400)
      .json({ message: "Getting error at backend while SignUp" });
  }
};

// +++++++++++++++++++++++++++++++*********   login  **********==================================================
// login
const loginRoute = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(mobileORemail,password);

    if (email === "" || password === "") {
      return res.status(400).json({ message: "Please enter all details" });
    }

    const userexists = await UserModel.findOne({ email: email });

    if (!userexists) {
      console.log("User notfound");
      return res
        .status(400)
        .json({ message: "User not found please register" });
    } else {
      // matching password
      const salt = bcryptjs.genSaltSync(10);

      const passwordsMatch = bcryptjs.compareSync(
        password,
        userexists.password
      );

      if (passwordsMatch) {
        const jwttoken = jwt.sign(
          userexists.toJSON(),
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1d" }
        );
        // Set the token in the response headers
        return res
          .status(200)
          .json({ message: "User loggedin", jwttoken: jwttoken });
      } else {
        console.log("Wrong Password");
        return res.status(400).json({ message: "Incorrect Password!" });
      }
    }
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({ message: "unable to login" });
  }
};

export { signupRoute, loginRoute };
