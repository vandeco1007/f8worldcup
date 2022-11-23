
const account = require('./account.router')
const matchscore = require('./matchscore.router')
const test = require('./test.router')
module.exports = (app)=>{
    app.get('/',(req,res,next)=>{
        res.render('index')
    })
    app.use('/account', account)
    app.use('/match', matchscore)
    app.use('/test', test)
}
