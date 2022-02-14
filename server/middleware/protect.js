const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
const accessToken = req.header('Authorization');
if(!accessToken) return res.status(400).send('login first');

try{
const verifyToken = jwt.verify(accessToken , 'munashe');
req.user = verifyToken;
next()
}catch(err){
    res.send('ivalid token')
}
}
module.exports = auth;