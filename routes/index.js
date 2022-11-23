
const option = require('../models/option.model')
const account = require('./account.router')
const matchscore = require('./matchscore.router')
const test = require('./test.router')
module.exports = (app)=>{
    app.get('/',async(req,res,next)=>{
        let data = await option.find()
        res.render('index',{result: data[0]})
    })
    app.use('/account', account)
    app.use('/match', matchscore)
    app.use('/test', test)
}
