const express = require('express');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller')
const {CONNECTION_STRING} = process.env



const app = express();

app.use(express.json());

//Auth Endpoints
app.post('/auth/register', controller.register)




massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.listen(5050, () => {
    console.log(`Server listening on port ${5050}`)
})