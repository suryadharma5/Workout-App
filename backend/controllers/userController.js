const User = require('../models/userModel')

// login user
const loginUser = async (req, res) => {
    return res.json({msg: 'login user'})
}

// signup user
const signupUser = async (req, res) => {
    return res.json({msg: 'signup user'})
}

module.exports = {
    loginUser,
    signupUser
}