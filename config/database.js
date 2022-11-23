const mongoose = require('mongoose')
const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://khuyenmai:1007mccl@cluster0.f4ppesr.mongodb.net/dudoantysoworldcupF8?retryWrites=true&w=majority")
        console.log('Database connect successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb

