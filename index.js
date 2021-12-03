require('dotenv').config() // this allows us to create a file .env
const express = require('express');

const server = express()

server.get('/api/users', (req, res) => {
    res.json([
        // collection of users with their own unique id and username
        {id: 1, username: `foo`},
        {id: 2, username: `bar`},
        {id: 3, username: `baz`},
    ])
})

//heroku wants to tell us what port to use on the heroku environment
const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})