require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3004
const userRoute = require('./routes/auth');
const clientRoute = require('./routes/client')

app.use(express.json())
app.use('/api', userRoute, clientRoute)


mongoose.connect('mongodb://localhost/my', () => console.log('connected database'));



app.listen(port, () => console.log(`running on port ${port}`))