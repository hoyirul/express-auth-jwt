var express = require('express');
var router = express.Router();
const { authJwt } = require("./../middleware");
const controller = require("./../controllers/api/user.controller");

router.get("/api/test/all", controller.allAccess);

router.get(
  "/api/test/user",
  [authJwt.verifyToken],
  controller.userBoard
);

router.get(
  "/api/test/mod",
  [authJwt.verifyToken, authJwt.isModerator],
  controller.moderatorBoard
);

router.get(
  "/api/test/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);

router.post("/api/test/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminPost
);

module.exports = router;