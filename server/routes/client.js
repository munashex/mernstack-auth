const express = require('express');
const router = express.Router();
const authToken = require('../middleware/protect')


const text = [{
    name: "munashe",
    age: 23
}, {
    name: "shawn",
    age: 20
}]


router.get('/clients', authToken, (req, res) => {
    res.send(text)
})

module.exports = router;