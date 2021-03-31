var express = require("express");
var router = express.Router();

var tutorController = require('../controllers/tutorController')
var sessionController = require('../controllers/sessionController')

router.get("/tutors",tutorController.list)
router.post("/tutor",tutorController.create)

router.get("/sessions",sessionController.list)
router.get("/tut_session/:tutor_id",sessionController.listBySessions)
router.post("/session",sessionController.create)
router.put("/book_session",sessionController.update)

module.exports = router;
