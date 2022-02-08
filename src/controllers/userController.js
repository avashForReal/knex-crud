const hashPassword = require("../helpers/hashPassword")
const userModels = require("../models/userModels")

// get all
const getUsers = async (_, res) => {

    try {
        // get all data
        const data = await userModels.getAll()

        res.status(200).json({ message: "success", data })
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }

}

// create user
const createUser = async (req, res) => {
    try {
        // get password from req body
        const { password } = req.body

        // hash the pw
        const hashedPassword = await hashPassword(password)

        // append id and hashed pw to the data
        const data = {
            ...req.body,
            password: hashedPassword,
        }

        // insert the data
        await userModels.insertOne(data)

        res.status(200).json({ message: "successfully created a new user" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }
}

// get user detail based on user id from params
const getUser = async (req, res) => {
    try {
        //destructure the id
        const { id } = req.params

        // find user by id
        const user = await userModels.findOneById(id);

        // check if the user doesn't exists
        if (user.length === 0) {
            return res.status(409).json({ message: "user not found" })
        }

        // send response
        res.status(200).json({ message: "success", data: user })

    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }

}


// delete an existing user
const deleteUser = async (req, res) => {
    try {
        // destructure id
        const { id } = req.params

        // get user by id
        const dbResponse = await userModels.deleteOneById(id)

        // check response: boolean 
        if (!dbResponse) {
            return res.status(409).json({ message: 'User not found!' })
        }

        // console.log("running outside");
        return res.status(200).json({ message: 'User deleted successfully!' })

    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }
}

// update user
const updateUser = async (req, res) => {
    try {
        // destructure id from params
        const { id } = req.params

        // get single user
        const singleUser = await userModels.findOne({ 'user_id': id })

        // if no user is found 
        if (!singleUser) {
            return res.status(409).json({ message: "User not found!" })
        }

        // destructure request body
        const { email, password, name, address } = req.body


        // if email is passed to be updated
        if (email) {
            const checkUserEmail = await userModels.findOne({ email })

            // check if the email exists
            if (checkUserEmail) {
                return res.status(409).json({ message: "Email already exists!" })
            }
        }


        // extract only the keys with values
        const requestObject = {
            email,
            password,
            name,
            address
        }

        // hash the password if exists
        if (password) {
            requestObject.password = await hashPassword(requestObject.password)
        }

        // update user by id
        const user = await userModels.updateOneById(id, requestObject)

        if (!user) {
            return res.status(409).json({ message: "Failed to update the user!" })
        }

        return res.status(200).json({ message: 'User updated successfully!' })

    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "internal server error" })
    }
}

module.exports = {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser
}