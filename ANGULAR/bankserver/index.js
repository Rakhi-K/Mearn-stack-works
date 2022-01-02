//import express
const express = require('express')

//create App using Express
const app = express()

//Set Port
app.listen(3000, () => {
    console.log("Server started at port number 3000");
})

//define default router

app.get('/', (req, res) => {
    res.send('GET method')
})

app.post('/', (req, res) => {
    res.send('Post Method')
})

app.put('/', (req, res) => {
    res.send('Put Method')
})

app.patch('/', (req, res) => {
    res.send('Patch Method')
})

app.delete('/', (req, res) => {
    res.send('Delete Method')
})


//FOR CHANGING STATUS CODE- res.status(series).send("method")
app.get('/', (req, res) => {
    res.status(401).send('GET method')
})



//***FOR BANK APPLICATION SERVER CREATION***

//** 1) **import dataservice from data.services.js
const dataServices = require('./services/data.services')

//parsing
app.use(express.json())

///***AUTHENTiCATION **** */

//***SESSSION STORAGE */

//** 1) **import express-session

// const session = require('express-session')

// app.use(session({
//     secret:'randomsecurestring',
//     resave:false,
//     saveUninitialized:false
// }))

// //aaplication specific middleware
// app.use((req, res, next)=>{
//     console.log("Application specific middleware");
//     next()
// })

// //router specific middleware

// const logMiddleware = (req, res, next) =>{
//     console.log(req.session);
//     if (!req.session.currentAcno) {
//         res.json({
//             status: false,
//             statusCode: 401,
//             message: "Please login"
//         })
//     }
//     else {
//        next()
//     }

// }



///***AUTHENTICATION **** */

//***JSON WEB TOKEN */

//1) import jwt token
const jwt = require('jsonwebtoken')

//2)JWT -MIDDLEWARE
const jwtMiddleware = (req, res, next) => {
    try {
        const token = req.headers["token"]
        //token validation
        const data = jwt.verify(token, 'superkey')
        req.currentAcno = data.currentAcno
        next()
    }
    catch {
        res.json({
            status: false,
            statusCode: 401,
            message: "Please login"
        })
    }
}


//token testing api
app.post('/token', jwtMiddleware, (req, res) => {
    res.send("Current acno is :" + req.currentAcno)
})


// CORS IMPORTING
const cors = require('cors')

//using cors
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))







//** 2) **default router -register api
app.post('/register', (req, res) => {
    // console.log(req.body);
    dataServices.register(req.body.acno, req.body.uname, req.body.password)
        .then(result => {
            console.log(result)
            res.status(result.statusCode).send(result)
        })

})


//** 3) **default router -loginapi
app.post('/login', (req, res) => {
    // console.log(req.body);
    dataServices.login(req.body.acno, req.body.pswd)
        .then(result => {

            res.status(result.statusCode).send(result)
        })

})

//** 3) **default router -deposite api
app.post('/deposite', jwtMiddleware, (req, res) => {
    console.log(req.body);
    dataServices.deposite(req.body.acno, req.body.password, req.body.amt)
        .then(result => { res.status(result.statusCode).send(result) })
})


//** 4) **default router -withdrawal api
app.post('/withdrawal', jwtMiddleware, (req, res) => {
    // console.log(req.body);
    dataServices.withdrawal(req, req.body.acno, req.body.password, req.body.amt)
        .then(result => {
            res.status(result.statusCode).send(result)
        })
})


//** 5) **default router -transaction api
app.post('/transaction', jwtMiddleware, (req, res) => {
    console.log(req.body);
    dataServices.getTransaction(req.body.acno)
        .then(result => {
            res.status(result.statusCode).send(result)
        })
})

//** 5) **default router -DELETE api
app.delete('/deleteAcc/:acno', jwtMiddleware, (req, res) => {
    dataServices.deleteAcc(req.params.acno)
        .then(result => {
            res.status(result.statusCode).send(result)
        })
})


