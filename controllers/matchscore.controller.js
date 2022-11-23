const matchscore = require('../models/matchscore.model')

module.exports = async(req,res,next)=>{
    let {...body} = req.body
    try {
        let checklist = await matchscore.findOne({ 'playerId': body.playerId })
        if(!checklist){
            let create = await matchscore.create({
                playerId: body.playerId,
                result1: "Morocco "+body.team1score+" - "+body.team2score+" Croatia",
                result2: "Đức : "+body.team3score+" - "+body.team4score+" Nhật Bản",
                result3: "Tây Ban Nha "+body.team5score+" - "+body.team6score+" Costa Rica",
                result4: "Bỉ "+body.team7score+" - "+body.team8score+" Canada",
            })
            // res.json(create)
            
            res.render("success",{result:create})
        }else{

            let result1 = []
            if(body.team1score==undefined){
                result1[0] = checklist.result1
            }else{
                if(body.team1score==''){
                    result1[0] = checklist.result1
                }else{
                    result1[0] = "Morocco: "+body.team1score+" - "+body.team2score+" Croatia"
                }
            }
//----------Team 2 ------------------//
            let result2 = []
            if(body.team3score==undefined){
                result2[0] = checklist.result2
            }else{
                if(body.team3score==''){
                    result2[0] = checklist.result2
                }else{
                    result2[0] = "Đức "+body.team3score+" - "+body.team4score+" Nhật Bản"
                }
            }
//--------------Team 3----------------/
            let result3 = []
            if(body.team5score==undefined){
                result3[0] = checklist.result3
            }else{
                if(body.team5score==''){
                    result3[0] = checklist.result3
                }else{
                    result3[0] = "Tây Ban Nha "+body.team5score+" - "+body.team6score+" Costa Rica"
                }
            }

//---------------Team 4 -------------/

            let result4 = []
            if(body.team7score==undefined){
                result4[0] = checklist.result4
            }else{
                if(body.team7score==''){
                    result4[0] = checklist.result4
                }else{
                    result4[0] = "Bỉ "+body.team7score+" - "+body.team8score+" Canada"
                }
            }

//---------------END TEAM-------------/

            let update = {
                playerId: body.playerId,
                result1: result1[0],
                result2: result2[0],
                result3: result3[0],
                result4: result4[0],
            }
            let edit = await matchscore.findOneAndUpdate({ 'playerId': body.playerId },update , {
                new: true
              });
              res.render("success",{result:edit})
        }
    } catch (error) {
        console.log(error)
        res.render("failure",{result:"Có lỗi trong quá trình truy cập, quý khách vui lòng kiểm tra lại sau ít phút."})
    }
}