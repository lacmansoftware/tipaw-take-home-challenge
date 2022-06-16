const express = require("express");
const { check, body } = require("express-validator");

const authController = require("../controllers/authController");
const User = require("../models/user");

const router = express.Router();

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Invalid Email address")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("Email address already exists");
          }
        });
      })
      .normalizeEmail(),
    body("password", "Enter a password at least 6 characters")
      .isLength({ min: 6 })
      .trim(),
    body("confirmPwd").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords have to match!");
      }
      return true;
    }),
  ],
  authController.postSignup
);

module.exports = router;
