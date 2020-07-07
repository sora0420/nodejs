const mongoos = require('mongoose')
const userSchema = mongoose.Schema({
    name :{
        type: String,
        maxlenght: 50
    },
    email:{
        type:String,
        trim: true,
        unique: 1
    },
    password:{
        type:String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlenght: 50
    },
    role:{
        type:String,
        default: 0
    },
    image: String,
    token:{
        type:String
    },
    tokenExp:{
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}