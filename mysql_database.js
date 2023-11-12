const express = require('express');
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express()

app.set('view engine', 'ejs')

const uri = "mongodb://localhost:27017"

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

mongoose.connect(uri)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))


app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog5 ',
        snippet: ' o function (eventName, callb',
        body: ' ntNameIndex[eventN'
    })
    blog.save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err))
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err))
})
app.get('/delete-single', (req, res) => {
        Blog.findByIdAndRemove('654f8919b6298306f51f4f30')
            .then((result) => {
                if (result) {
                    res.send(`Ducument deleted:${result}`)
                } else {
                    res.send(`Ducument Not found`)
                }
            })
            .catch((err) => console.log(err))
    })
    //adding blog
    //app.get('/add-blog', (req, res) => {
    //const blog = new Blog({
    //title: 'new blog',
    //snippet: 'about my new blog',
    //body: 'This query betwwen mysql2 & nodejs'
    //})
    //blog.save()
    //.then(() => res.send(result))
    //.catch((err) => console.log(err))
    //})

//const getCourses = async() => {
//const result = await pool.query('select * from blog');
//console.log(result)
//}
//getCourses()