//js - Synchrounus , single threaded, line by line execution

//Synchrounus- goes with one order- line by line

//Asynchrounus- goes with no order

//api- apliication prgm interfcae- serve data to needed

//JSON-PLACEHOLDER, cowin, open weather-1878e9103cf28e374070c1790f95b9bf- key

//https:- links - methods- to get details from server side- cliennt uses a url to get from server side- to get methods- in server side- inspect-network- click the requested url-methods displayed
                   //1)get- to get datas without giving any input
                   //1)post- to get details after passing the details
                   //1)put- to update any data from client to server
                   //1)patch- partial updation- update any one of the data in obj
                   //1)delete- to delete the obj from the server side

//while doing this networking- we see status-
                               //100-199- information
                               //200-299- success
                               //300-399- re directional
                               //400-499- client error
                               //500-599- server side

//postman, thunderclient- use to check and get the urls & methods- response- in that-send req- dil get- and url paste
//https://jsonplaceholder.typicode.com/users/1- first user only-user/1- id=1


//when js is taken\- it creates a execution context- with 2 objs- this(client side -log runs(in ie console)), global(server side-log runs(in node.js))




                               
//here call stack & web api, call back queue,event loop
// console.log("line 1");
// setTimeout(()=>{
//     console.log("line 2");
// },0)
// console.log("line 3");



// console.log("first console");                 // here first this
// 
//setTimeout(()=>{
//     console.log(" 1st set time out ");
// },3000)                                        //last this

// setTimeout(()=>{
//     console.log(" 2nd set time out ");         // third this
// },0)
// console.log("second console");                 //second this

// output- forst console, second console, 2nd time out, 1st time out



//Promise - also passes to web api- 3STAGES- FULFILL(settled), PENDING, REJECT- contsiner for future
 var pro= new Promise((resolve, reject)=>{
     let watch_time=2;
     if(watch_time>1){
         resolve("session good")  
     }
     else{
         reject("sesion bad")
     }
 })

 pro.then(res=>console.log(res)).catch(error=>console.log(error))

// if resolve- pro.then
// if reject- pro.then(res=>console.log(res)).catch(error=>console.log(error))



//for resolve
var mypro= new Promise((resolve, reject)=>{
    let bank_app_completed= true
    if (bank_app_completed=true) {
        resolve("completed")
    }
})

mypro.then(res=>console.log(res))


//for reject

var mypro= new Promise((resolve , reject)=>{
    let bank_app_completed=false
    if ( ! bank_app_completed) {
        reject("incompleted")
    }
})

mypro.catch(error=>console.log(error))


