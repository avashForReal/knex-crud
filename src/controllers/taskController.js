const taskModels = require("../models/taskModels")
const {
    findOne: findSingleUser
} = require("../models/userModels")

// get all tasks
// if query exists, search for the requested task
// else fetch all the tasks
const getAllTasks = async (req, res) => {
    try {

        const { task } = req.query

        // if task query doesn't exist, fetch all the tasks
        if (!!!task) {
            // get all data
            const data = await taskModels.getAll()

            return res.status(200).json({ message: "success", data })
        }

        const data = await taskModels.getMatching(task);

        res.status(200).json({ message: "success", data })

    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }
}

// create a new task
const createNewTask = async (req, res) => {
    try {

        const { assigned_user } = req.body
        // check if the task with given id exists
        // get single task
        const singleUser = await findSingleUser({ 'user_id': assigned_user })

        // if no task is found 
        if (!singleUser) {
            return res.status(409).json({ message: "The assigned user doesn't exist" })
        }

        // get data from body
        const data = req.body;

        // add new task
        await taskModels.insertOne(data)

        res.status(200).json({ message: "successfully added new task", data })
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }
}

// get task by id
const getTask = async (req, res) => {
    try {
        //destructure the id
        const { id } = req.params

        // find task by id
        const task = await taskModels.findOneById(id);

        // check if the task doesn't exists
        if (task.length === 0) {
            return res.status(409).json({ message: "task not found" })
        }
        // send response
        res.status(200).json({ message: "success", data: task })

    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }
}

// delete an existing task
const deleteTask = async (req, res) => {
    try {
        // destructure id
        const { id } = req.params

        // get task by id
        const dbResponse = await taskModels.deleteOneById(id)

        // check response: boolean 
        if (!dbResponse) {
            return res.status(409).json({ message: 'Task not found!' })
        }

        // console.log("running outside");
        return res.status(200).json({ message: 'Task deleted successfully!' })

    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }
}

// update task
const updateTask = async (req, res) => {
    try {
        // destructure id from params
        const { id } = req.params

        // destructure request body to get user id
        const { task, assigned_user } = req.body

        // find user if exists
        const singleUser = await findSingleUser({ 'user_id': assigned_user })

        // if no user is found 
        if (!singleUser) {
            return res.status(409).json({ message: "Assigned user not found!" })
        }

        // extract only the keys with values
        const requestObject = {
            task,
            assigned_user
        }

        // update user by id
        const updateTaskResult = await taskModels.updateOneById(id, requestObject)


        if (!updateTaskResult) {
            return res.status(409).json({ message: "Task not found!" })
        }

        return res.status(200).json({ message: 'Task updated successfully!' })

    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }
}


module.exports = {
    getAllTasks,
    createNewTask,
    getTask,
    deleteTask,
    updateTask
}