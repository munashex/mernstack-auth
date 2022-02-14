const dotenv = require('dotenv').config();
const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { application } = require('express');



router.post('/signup', async(req, res) => {
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;

const validEmail = await userModel.findOne({email: req.body.email});
if(validEmail) return res.status(400).send('email already exists')

res.send('welcome')

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password, salt);



const users = new userModel({
    name: name,
    email: email,
    password: hashedPassword
})

try{
const savedUser = await users.save();
console.log(savedUser)
}catch(error){
    console.error(error)
}
})

 


router.post('/login', async(req, res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({email: email});
    if(!user) return res.status(400).send('wrong email and password');

    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword) return res.status(400).send('wrong email and password');

    const accessToken = jwt.sign({email: user.emaiL}, 'munashe', {expiresIn: "2m"});
   

    res.header('Authorization', accessToken);

    res.json({
    accessToken: accessToken,
    })

})

module.exports = router;