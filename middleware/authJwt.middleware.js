const jwt = require("jsonwebtoken");
const config = require("./../config/auth.config.js");
const { User, Role } = require('./../models');

verifyToken = (req, res, next) => {
  let accessToken = req.headers['x-access-token'];

  if (!accessToken) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(accessToken, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    Role.findOne({
      where: {
        id: user.roleId
      }
    }).then(roles => {
      if (roles.role === "admin") {
        next();
        return;
      }
      

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

isModerator = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    Role.findOne({
      where: {
        id: user.roleId
      }
    }).then(roles => {
      if (roles.role === "moderator") {
        next();
        return;
      }

      res.status(403).send({
        message: "Require Moderator Role!"
      });
    });
  });
};

isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    Role.findOne({
      where: {
        id: user.roleId
      }
    }).then(roles => {
      if (roles.role === "moderator") {
        next();
        return;
      }

      if (roles.role === "admin") {
        next();
        return;
      }

      res.status(403).send({
        message: "Require Moderator or Admin Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin
};
module.exports = authJwt;