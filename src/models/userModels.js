// knex import
const knex = require("../knex")

// find one
const findOne = async (params) => {
    const user = await knex
        .select("user_id", "email", "name")
        .where({ ...params })
        .from('users')

    return user.length <= 0 ? null : user
}

//get all 
const getAll = async () => {
    try {
        // select required columns
        const data = await knex
            .select('user_id', 'name', 'email', 'address')
            .from('users')

        return data
    } catch (e) {
        console.log(e)
        throw new Error("An error occured")
    }
}

// insert one data
const insertOne = async (data) => {
    try {
        const dbRes = await knex('users')
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
            .select('user_id', 'name', 'email', 'address')
            .from('users')
            .where('user_id', '=', id)

        return data
    } catch (e) {
        console.log(e)
        throw new Error("An error occured")
    }
}

// delete one using id
const deleteOneById = async (id) => {
    try {

        const dbRes = await knex('users')
            .where('user_id', "=", id)
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

        const dbRes = await knex('users')
            .where({ 'user_id': id })
            .update({ ...newObj })

        return dbRes;
    } catch (e) {
        console.log(e)
        throw new Error("An error occured")
    }
}


module.exports = {
    findOne,
    getAll,
    insertOne,
    findOneById,
    deleteOneById,
    updateOneById
}