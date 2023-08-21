const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')


const indexRouter = require('./routes/index')


app.set('view engine','ejs')



app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname,'public/')))
app.use('/',indexRouter)

app.get('*', function(req,res){
    res.status(400).render('error', {title: 'Error'})
})

app.listen(7070, ()=>{
    console.log('Shipping DHL server is awake and \nlistening on port 7070')
});