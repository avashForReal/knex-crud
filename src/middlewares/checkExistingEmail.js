const knex = require("../knex") 

// checks if the email already exists in the db
const checkExistingEmail = async (req,res,next) => {
    try{
        // find user with the requested email
        const user = await knex.select('user_id', 'name', 'email', 'address').from('users').where('email', '=', req.body.email)
        // if found send message, else proceed with the request
        if(user.length != 0){
            res.status(409).json({ error: "Email already exists"})
        }else{
            next()
        }
    }catch(e){
        console.log(e);
        throw new Error("An error occured")
    }
}

module.exports = {checkExistingEmail}
