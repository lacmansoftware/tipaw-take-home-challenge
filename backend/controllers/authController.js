const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const User = require("../models/user");

exports.postSignup = (req, res, next) => {
  // Check if validation occurs errors
  const errorsVal = validationResult(req);
  if (!errorsVal.isEmpty()) {
    return res.status(422).json({
      status: "validate-failed",
      validationErrors: errorsVal.array(),
    });
  }

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  bcryptjs
    .hash(password, 12)
    .then((hashPsw) => {
      const user = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashPsw,
      });
      return user.save();
    })
    .then((user) => {
      return res.status(200).json({
        status: "ok",
        message: "Successfully signed up!",
      });
    })
    .catch((error) => {
      console.error(error);
      return res.json({
        status: "error",
        error: error,
      });
    });
};
