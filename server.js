const dbInit = require('./database/db.init.js')
const express = require('express')

const User = require('./database/models/User.model')
const Post = require('./database/models/Post.model')
const Tag  = require('./database/models/Tag.model')

dbInit();

const app = express()
app.use(express.json())

app.get('/', async (req, res, next) => {
    // const users = await User.query().withGraphFetched('posts.[tags]')
    const posts = await Post.query().withGraphFetched('user').withGraphFetched('tags')
    res.json({posts})
})

// let movies = await Movie
//   .query()
//   .eager('[actors.[parent, movies], reviews.reviewer]');
 
// console.log(movies[0].actors[0].parent.firstName);
// // --> Gustav 
// console.log(movies[0].actors[0].movies[2].name);
// // --> Predator 
// console.log(movies[0].reviews[0].reviewer.firstName);
// // --> Some

app.listen(9234, () => console.log('server running on port : 9234'))
