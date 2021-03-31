const { Tutor } = require("../models");

exports.get = function (){
    return new Promise((resolve, reject) => {
        Tutor.find({}, (error, tutors) => {
          error ? reject(error) : resolve(tutors);
        });
      });
}
exports.save = function (tutor) {
  return new Promise((resolve, reject) => {
    Tutor.create(tutor, (error, tutor) => {
      error ? reject(error) : resolve(tutor);
    });
  });
};
