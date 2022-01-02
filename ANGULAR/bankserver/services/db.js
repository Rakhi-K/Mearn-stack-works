//import mongoose

const mongoose = require('mongoose')


//connct server and mongodb - mongodb://host link/dataname in mongodb
mongoose.connect('mongodb://localhost:27017/bank',{
    useNewUrlParser:true
})


//modal creation - const User(singular name of collectn givn in mongodb with first letter caps- same in model('User')) 
const User = mongoose.model('User',{
    acno:Number,
    uname:String,
    password:String,
    balance:Number ,
    transaction:[]
})


//export model

module.exports={
    User
}


//MODEL FOR TRANACTION
// const Transaction = mongoose.model('Transaction',{
//     "amount ": Number,
//     "type":String
// })

// module.exports={
//     Transaction
// }