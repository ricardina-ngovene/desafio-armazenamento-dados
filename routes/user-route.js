const express = require("express");

const router = express.Router();

const { getAllUser,getUser , singnup, login,} = require("../controllers/user-controller");



router.get("/", getAllUser);

router.get("/:id", getUser);

router.post("/", singnup);

router.post("/", login);


module.exports = router;