const mongoose = require('mongoose')

const newSchema = mongoose.Schema({
    name:{type:String,required:true},
    position:{type:String,required:true}
})

const Task = mongoose.model('Task',newSchema)

module.exports = {Task}


