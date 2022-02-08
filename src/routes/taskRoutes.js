const express = require("express")
const router = express.Router()

// validator middlewares/helpers
const {
    newTaskValidationRules,
    updateTaskValidationRules,
    validate
} = require("../middlewares/validator")

// import controllers
const {
    getAllTasks,
    createNewTask,
    getTask,
    deleteTask,
    updateTask
} = require("../controllers/taskController")


router.route('/')
    .get(getAllTasks) //get all tasks
    .post(newTaskValidationRules(), validate, createNewTask) //add a new task

router.route('/:id')
    .get(getTask) // get task by id
    .delete(deleteTask) //delete a task
    .patch(updateTaskValidationRules(), validate, updateTask) //update a task

module.exports = router