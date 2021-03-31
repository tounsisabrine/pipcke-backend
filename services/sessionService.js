const { Session } = require("../models");

exports.get = function () {
  return new Promise((resolve, reject) => {
    Session.find({}, (error, sessions) => {
      error ? reject(error) : resolve(sessions);
    });
  });
};
exports.findByTutor = function (id) {
  return new Promise((resolve, reject) => {
    Session.find({tutor_id : id , reserved : false}, (error, sessions) => {
      error ? reject(error) : resolve(sessions);
    });
  });
};
exports.save = function (tutor) {
  return new Promise((resolve, reject) => {
    Session.create(tutor, (error, session) => {
      error ? reject(error) : resolve(session);
    });
  });
};

exports.update = function (body) {
  return new Promise((resolve, reject) => {
    Session.findByIdAndUpdate(body.id, { $set: { client: body.client , reserved : true}} ,(error, session) => {
      error ? reject(error) : resolve(session);
    });
  });
};