const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// create jwt
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// login user
const loginUser = async (req, res) => {
    return res.json({msg: 'login user'})
}

// signup user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        // signup adalah statics func dari userModel 
        const user = await User.signup(email, password)

        // create token
        const token = createToken(user._id)

        return res.status(200).json({email, token})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }


}

module.exports = {
    loginUser,
    signupUser
}