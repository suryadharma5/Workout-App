const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async(req, res, next) => {

    //verify authentication
    const  { authorization } = req.headers

    if(!authorization){
        return res.status(401).json({error: "Authorization token required"})
    }

    // tokenya nnti berbentuk bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ, jadi kita mau ambil tokennya tanpa ada bearer makannya displit
    const token = authorization.split(' ')[1]

    try {
        // verify token
        const { _id } = jwt.verify(token, process.env.SECRET)

        // menambahkan properti user ke request dengan attribut user._id saja
        req.user = await User.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }


}

module.exports = { requireAuth }