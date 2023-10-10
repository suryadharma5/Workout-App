const express = require('express')

//create express app
const app = express()

// routes
app.get('/', (req, res) => {
    res.json({
        msg : "Hello dunia"
    })
})


//listen to request 
app.listen(4000, () => {
    console.log('listen to port 4000')
})