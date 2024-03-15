const express = require("express");
const router = express.Router();
const {getLessons, getLesson, createLesson, updateLesson, deleteLesson} = require("../controllers/lesson");

router.get("/",getLessons);
router.get("/:id",getLesson);
router.post("/",createLesson);

module.exports = router 