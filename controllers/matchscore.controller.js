const matchscore = require('../models/matchscore.model')
const option = require('../models/option.model')

module.exports = async(req,res,next)=>{
    let {...body} = req.body
    try {
        let checklist = await matchscore.findOne({ 'playerId': body.playerId })
        console.log(checklist)
        if(!checklist){
            let choice = await option.find()
            let choiceValue = choice[0]
            let create = await matchscore.create({
                playerId: body.playerId,
                result1: choiceValue.team1Name+" "+body.team1score+" - "+body.team2score+" "+choiceValue.team2Name,
                result2: choiceValue.team3Name+" "+body.team3score+" - "+body.team4score+" "+choiceValue.team4Name,
                result3: choiceValue.team5Name+" "+body.team5score+" - "+body.team6score+" "+choiceValue.team6Name,
                result4: choiceValue.team7Name+" "+body.team7score+" - "+body.team8score+" "+choiceValue.team8Name,
            })
            // res.json(create)
            res.render("success",{result:create})
        }else{
            res.render("failure",{result:"Quý khách đã lựa chọn"})
        }
    } catch (error) {
        console.log(error)
        res.render("failure",{result:"Có lỗi trong quá trình truy cập, quý khách vui lòng kiểm tra lại sau ít phút."})
    }
}