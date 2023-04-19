// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const gravatar = require('gravatar');
// const config = require('config');

// // Load User model
// const User = require("I:/downloads 2/mern/project/models/User.js");
// const validateRegisterInput = require("I:/downloads 2/mern/project/validation/register.js");
// const validateLoginInput = require('I:/downloads 2/mern/project/validation/login.js')

// router.use(express.json());
// const { check, validationResult } = require("express-validator");

// // routes defined: 
// // register-user
// // login user
// router.post("/register-users", async (req, res) => {
//   const { errors, isValid } = await validateRegisterInput(req.body);

  
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const user = await User.findOne({ email: req.body.email });
//   if (user) {
//     errors.email = "Email already exists";
//     return res.status(400).json(errors);
//   } else {
//     const avatar = gravatar.url(req.body.email, {
//       s: "200", // Size
//       r: "pg", // Rating
//       d: "mm", // Default
//     });
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       avatar,
//       password: req.body.password,
//     });

//     try {
//         const salt = await bcrypt.genSalt(10);
//         newUser.password = await bcrypt.hash(newUser.password, salt)
//         await newUser.save();
//         // res.send(newUser)
//         // res.send("hello world")
//         console.log("check 12")

//         // const payload = {
//         //   user: {
//         //     _id: newUser._id
//         //   }
//         // };

//         // try {
//         //   const token = await jwt.sign(payload, config.get("jwtSecret"), {expiresIn: 360000})
//         //   res.json({newUser, token})
//         // } catch (error) {
          
//         // }
        

//     } catch (e) {
//         res.status(400).send(e);
//         console.log(e)
//     }
//   }
// });

// router.post('logon-user', async(req, res)=>
// {
//   const {errors, isValid} = validateLoginInput(req.body);

//   if(!isValid)
//   {
//     return res.status(400).send(errors)
//   }

//   const email = req.body.email;
//   const password = req.body.password;

//   const user = await User.findOne({email});
//   if (!user) {
//     errors.email = "User not found";
//     return res.status(404).json(errors);
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (isMatch) {
//     const payload = { id: user.id, name: user.name, avatar: user.avatar };
//     try {
//       const token = jwt.sign(payload, config.get('jwtSecret'),{ expiresIn: 360000 })
      
//       res.send({
//         success: true,
//         token: "Bearer " + token
//       });
//     } catch (error) {
      
//     }
    
//       (err, token) => {
        
//       }
//     );
// })

// module.exports = router;

// ---------------------------------------------------------------------------------------------------------------------------------
