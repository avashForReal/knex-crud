// knex import
const knex = require("../knex")

// find one
const getAll = async () => {
    try {
        const data = await knex
            .select('tasks.task', 'tasks.assigned_user', 'users.name', 'users.address', 'users.email')
            .from('tasks')
            .innerJoin('users', 'tasks.assigned_user', 'users.user_id')

        return data
    } catch (e) {
        console.log(e)
        throw new Error("An error occured")
    }
}

// find one
const getMatching = async (task) => {
    try {
        const data = await knex
            .select('tasks.task', 'tasks.assigned_user', 'users.name', 'users.address', 'users.email')
            .from('tasks')
            .where('tasks.task','like', `%${task}%`)    
            .innerJoin('users', 'tasks.assigned_user', 'users.user_id')
            
        return data
    } catch (e) {
        console.log(e)
        throw new Error("An error occured")
    }
}

// insert one data
const insertOne = async (data) => {
    try {
        const dbRes = await knex('tasks')
            .insert(data);
        console.log(dbRes);

    } catch (e) {
        console.log(e)
        throw new Error("An error occured")
    }
}

// find one by id
const findOneById = async (id) => {
    try {
        const data = await knex
            .select('task_id','tasks.task', 'tasks.assigned_user', 'users.name', 'users.address', 'users.email')
            .from('tasks')
            .innerJoin('users', 'tasks.assigned_user', 'users.user_id')
            .where('task_id', '=', id)

        return data
    } catch (e) {
        console.log(e)
        throw new Error("An error occured")
    }
}

// delete one using id
const deleteOneById = async (id) => {
    try {
        const dbRes = await knex('tasks')
            .where('task_id', "=", id)
            .del()

        return dbRes
    } catch (e) {
        console.log(e)
        throw new Error("An error occured")
    }
}

// first parameter is the id and second is the data to be updated
const updateOneById = async (id, requestObject) => {
    try {

        const newObj = {}

        // loop through the object and remove undefined fields
        for (keys in requestObject) {
            // check if the data exists
            if (requestObject[keys]) {
                // update the data
                newObj[keys] = requestObject[keys]
            }
        }

        const dbRes = await knex('tasks')
            .where({ 'task_id': id })
            .update({ ...newObj })

        return dbRes;
    } catch (e) {
        console.log(e)
        throw new Error("An error occured")
    }
}

module.exports = {
    getAll,
    getMatching,
    insertOne,
    findOneById,
    deleteOneById,
    updateOneById
}