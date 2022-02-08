const express = require("express")
const router = express.Router()

// validator middlewares/helpers
const {
    newUserValidationRules,
    updateUserValidationRules,
    validate
} = require("../middlewares/validator")


// import controllers
const {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser
} = require("../controllers/userController")

// middleware import
const { checkExistingEmail } = require("../middlewares/checkExistingEmail")

router.route('/')
    .get(getUsers) //get all users
    .post(newUserValidationRules(), validate, checkExistingEmail, createUser) //add a new user

router.route('/:id')
    .get(getUser) // get a user
    .delete(deleteUser) //delete a user
    .patch(updateUserValidationRules(), validate, updateUser) //update a user

module.exports = router