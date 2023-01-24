var express = require('express');
var router = express.Router();
const { verifySignUp } = require("./../middleware");
const controller = require("./../controllers/api/auth.controller");

router.post(
    "/api/auth/signup",
    [
        verifySignUp.checkDuplicateEmail,
        verifySignUp.checkRolesExisted
    ],
    controller.signup
);

router.post("/api/auth/signin", controller.signin);

module.exports = router;