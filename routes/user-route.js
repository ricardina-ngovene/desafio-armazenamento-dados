const express = require("express");

const router = express.Router();

const {
  getAllUser,
  getUser,
  signup,
  login,
} = require("../controllers/user-controllers");

router.get("/", getAllUser);

router.get("/:id", getUser);

router.post("/", signup);

router.post("/", login);


module.exports = router;