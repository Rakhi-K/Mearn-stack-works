
//IMPORT JWT IN DS
const jwt = require('jsonwebtoken')

const db = require('./db')


database = {
  1000: { acno: 1000, uname: "NEER", password: "1000", balance: 5000, transaction: [] },
  1001: { acno: 1001, uname: "LAISA", password: "1001", balance: 5000, transaction: [] },
  1002: { acno: 1002, uname: "REETHU", password: "1002", balance: 5000, transaction: [] },
}


const register = (acno, uname, password) => {

  return db.User.findOne({ acno })
    .then(user => {
      console.log(user);
      if (user) {
        return {
          status: false,
          statusCode: 401,
          message: "Account already exist!!!! Please log in"
        }
      }

      else {
        const newUser = new db.User({
          acno,
          uname,
          password,
          balance: 0,
          transaction: []
        })
        newUser.save()
        return {
          status: true,
          statusCode: 200,
          message: "Account Created Successfully!!!!"
        }
      }
    })
}



//   if (acno in database) {
//     return {
//       status: false,
//       statusCode: 401,
//       message: "Account already exist!!!! Please log in"
//     }
//   }
//   else {
//     database[acno] = {
//       acno,
//       uname,
//       password,
//       balance: 0,
//       transaction: []
//     }
//     return {
//       status: true,
//       statusCode: 200,
//       message: "Account Created Successfully!!!!"
//     }
//   }
// }




const login = (acno, password) => {

  return db.User.findOne({ acno, password })
    .then(user => {
      if (user) {
        currentUserName = user.uname
        //token generation  sign is used by us
        const token = jwt.sign({
          currentAcno: acno
        }, 'superkey')

        return {
          status: true,
          statusCode: 200,
          message: "Logged in Successfully!!!!",
          currentUserName: currentUserName,
          currentAcno: acno,
          token
        }
      }

      else {
        return {
          status: false,
          statusCode: 401,
          message: "Invalid Account number or password"
        }
      }
    })
}


//   if (acno in database) {
//     if (pswd == database[acno]["password"]) {

//       currentUserName = database[acno]["uname"]

//       //store acno in session
//       // req.session.currentAcno = acno;




//       return {
//         status: true,
//         statusCode: 200,
//         message: "Logged in Successfully!!!!",
//         currentUserName: currentUserName,
//         currentAcno: acno,
//         token
//       }

//     }
//     else {

//       return {
//         status: false,
//         statusCode: 401,
//         message: "Invalid password"
//       }
//     }
//   }
//   else {

//     return {
//       status: false,
//       statusCode: 401,
//       message: "User dosenot exist"
//     }
//   }

// }


const deposite = (acno, password, amt) => {

  var amount = parseInt(amt);  //as it comes as string so parsed to int
  // console.log(req.session.currentAcno);
  // let database = this.data
  return db.User.findOne({ acno, password })
    .then(user => {
      if (!user) {
        return {
          status: false,
          statusCode: 401,
          message: "Invalid account or password"
        }
      }
      else{
      user.balance += amount
      user.transaction.push({amount: amount,type: "CREDIT"})
      user.save();
      return {
        status: true,
        statusCode: 200,
        message: amount + "is credited and New balance is" + user.balance

      }
    }
    })
  }

//   if (acno in database) {
//     if (pswd == database[acno]["password"]) {

//       database[acno]["balance"] = database[acno]["balance"] + amount
//       database[acno]["transaction"].push({ amount: amount, type: "CREDIT" })


//       return {
//         status: true,
//         statusCode: 200,
//         message: amount + "is credited and New balance is" + database[acno]["balance"]

//       }

//     }

//     else {

//       return {
//         status: false,
//         statusCode: 401,
//         message: "Invalid password"
//       }
//     }
//   }

//   else {

//     return {
//       status: false,
//       statusCode: 401,
//       message: "User not found"
//     }
//   }

// }





const withdrawal = (req,acno, password, amt) => {
  var amount = parseInt(amt);  //as it comes as string so parsed to int
  return db.User.findOne({ acno, password })
  .then(user => {

    if(req.currentAcno != acno){
      return {
        status: false,
        statusCode: 401,
        message: "Operation denied"
      }
    }
    if (!user) {
      return {
        status: false,
        statusCode: 401,
        message: "Invalid account or password"
      }
    }

    if(user.balance<amount){
      return {
        status: false,
        statusCode: 401,
        message: "Insufficient balance"

      }
    }
  else{
    user.balance -= amount
    user.transaction.push({
      amount: amount,
       type: "DEBITED"
    })
    user.save()
    return {
      status: true,
      statusCode: 200,
      message: amount + "is debited and New balance is" + user.balance

    }
  }
  })
}

//   if (acno in database) {
//     if (pswd == database[acno]["password"]) {
//       if (database[acno]["balance"] > amount) {
//         database[acno]["balance"] = database[acno]["balance"] - amount
//         database[acno]["transaction"].push({ amount: amount, type: "DEBIT" })
//         console.log(database[acno]["transaction"]);

//         return {
//           status: true,
//           statusCode: 201,
//           message: amount + "is debited and New balance is" + database[acno]["balance"],

//         }
//       }
//       else {

//         return {
//           status: false,
//           statusCode: 401,
//           message: "Insufficient balance"

//         }
//       }


//     }
//     else {

//       return {
//         status: false,
//         statusCode: 401,
//         message: "Invalid password"
//       }
//     }
//   }
//   else {

//     return {
//       status: false,
//       statusCode: 401,
//       message: "User not found"
//     }
//   }
// }



const getTransaction = (acno) => {
  return db.User.findOne({ acno})
  .then(user=>{
    if(!user){
      return {
        status: false,
        statusCode: 401,
        message: "User not found"
      }
    }
    else{
      return {
        status: true,
        statusCode: 201,
        transaction: user.transaction
      }
    }
  })
}
//   if (acno in database) {
//     return {
//       status: true,
//       statusCode: 201,
//       transaction: database[acno]["transaction"]
//     }
//   }
//   else {
//     return {
//       status: false,
//       statusCode: 401,
//       message: "User not found"
//     }
//   }
// }

const deleteAcc =(acno) =>{
 return db.User.deleteOne({acno})
  .then(user =>{
    if(!user){
       return {
        status: false,
        statusCode: 401,
        message: "User not found"
      }
    }
   else{
      return {
        status: true,
        statusCode: 201,
        message: "Account number " + acno + "is deleted successfully"
      }
    }
  })
}


//exporting - for using the function in any other files
module.exports = {
  register,
  login,
  deposite,
  withdrawal,
  getTransaction,
  deleteAcc
}
