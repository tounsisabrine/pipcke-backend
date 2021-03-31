const axios = require("axios");
const SessionService = require("../services/sessionService")
exports.list = async function (req,res){
    try {
        const sessions = await SessionService.get()
        return res.status(200).json(sessions)
    } catch (error) {
        console.log(error)
    }
}
exports.listBySessions = async function (req,res){
    try {
        let tutId = req.params.tutor_id
        const sessions = await SessionService.findByTutor(tutId)
        return res.status(200).json(sessions)
    } catch (error) {
        console.log(error)
    }
}
exports.create = async function (req,res){
    try {
        const newSession = await SessionService.save(req.body)
        return res.status(200).json(newSession)
    } catch (error) {
        console.log(error)
    }
}
exports.update = async function (req,res){
    try {
        const newSession = await SessionService.update(req.body)
        return res.status(200).json(newSession)
    } catch (error) {
        console.log(error)
    }
}
