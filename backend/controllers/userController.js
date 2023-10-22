const User = require('../models/userModel')

// login user
const loginUser = async (req, res) => {
    return res.json({msg: 'login user'})
}

// signup user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        // signup adalah static func dari userModel 
        const user = await User.signup(email, password)
        return res.status(200).json({email, user})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }


}

module.exports = {
    loginUser,
    signupUser
}