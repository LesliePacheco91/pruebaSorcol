const {lessonModel} = require('../models');

const getLessons = async (req, res) =>{

    const data = await lessonModel.find({});
    res.send({data});

}

const getLesson = (req, res) =>{}

const createLesson = async (req, res) => {
    const { body } = req

    console.log(body);
    const data = await lessonModel.create(body);
    res.send({data});
}

const updateLesson = (req, res) =>{}

const deleteLesson = (req, res) =>{}

module.exports = {getLessons, getLesson, createLesson, updateLesson, deleteLesson } 