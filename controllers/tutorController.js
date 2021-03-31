const axios = require("axios");
const TutorService = require("../services/tutorService");

exports.list = async function (req, res) {
  try {
    TutorService.get().then((tutors)=>{
        return res.status(200).json(tutors);
    });
  } catch (error) {
    console.log(error);
  }
};
exports.create = function (req, res) {
  try {
    TutorService.save(req.body)
      .then((newTutor) => {
        return res.status(200).json(newTutor);
      })
      .catch((error) => {
        return res.status(500).json({error : error});
      });
  } catch (error) {
    console.log(error);
  }
};
