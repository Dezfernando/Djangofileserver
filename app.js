const express = require('express')
var favicon = require('serve-favicon')






//express app
const app = express()
    //listen for request 
const port = 3000
    //import bootstrat

// connect to mongo db

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//mongoose.connect(uri)
//  .then((result) => app.listen(3000))
//.catch((err) => console.log(err))


//registeer View Engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })

})


app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })

})


//redirect

app.get('/about-us', (req, res) => {
    res.redirect('/about', { title: 'About-us' })
})

app.get('/blog/create', (req, res) => {
    res.render('create', { title: 'Create a New Blog' })
})


app.use((req, res) => {
    res.render('404').render('404', { title: '404' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))