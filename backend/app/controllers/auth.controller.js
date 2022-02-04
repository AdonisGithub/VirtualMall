const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
//const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  //console.log(req.body)
  const user = new User({
      fullName: req.body.fullName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      phoneNumber:req.body.phoneNumber,
      password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    else{
      res.send("register success!");
      //console.log("register success!");
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({$or:[
        {userName: req.body.NameOrEmail},
        {email: req.body.NameOrEmail}
      ]   
    })
    //.populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send("User Not found.");
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send("Invalid Password!");
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      // var authorities = [];

      // for (let i = 0; i < user.roles.length; i++) {
      //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      // }

      req.session.token = token;

      res.status(200).send({
        id: user._id,
        userName: user.userName,
        email: user.email,
      });
    });
};

// exports.signout = async (req, res) => {
//   try {
//     req.session = null;
//     return res.status(200).send({ message: "You've been signed out!" });
//   } catch (err) {
//     this.next(err);
//   }
// };
