const mongoose = require('mongoose');


const userSchema =  new mongoose.Schema({
    name: String,
    email: String,
    password: String, 
    updated: {
        type: Date,
        default: Date.now
    }
})


const users = mongoose.model('users', userSchema);

module.exports = users;