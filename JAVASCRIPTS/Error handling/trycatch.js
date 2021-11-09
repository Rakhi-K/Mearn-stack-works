/// error handling- try, catch, throw, finally
 // in  Try BLOCK- doubtfull case

 // catch block- hand chyan ula case

var expr="%10+20+30-2"
try{
    console.log(eval(expr));         /// 1) doubtfull expr
}
catch(error){
    console.log("error occured");    //2) errror occured- so this is logged
}

console.log("database commit");     // 3) next thhis is logged



// // //
var age=20;
try{
    if(age<18){
        throw new error("invalid age")
    }
    else{
        console.log(age);
    }
}
catch(error){
console.log("error occured");
}




// // //
var phn= "9526";

try{
    if(phn.length<10){
        throw new Error("invalid phn number")
    }
    else{
        console.log("valid phn number");
    }
}
catch(error){
    console.log("error occured");
}

// // // 

var accnum= 123

try{
    if(isNaN(accnum)){
        throw new Error("enter valid acc num")
    }
    else{
        console.log("valid");
       
    }
}

catch(error){
    console.log(error);
}

//
var acno= "t123";

try{
    if(isNaN(acno)){
        throw new Error("enter valid acc num")
    }
    else{
        console.log("valid");
       
    }
}

catch(error){
    eval("%2+3+9")
}


finally{
    console.log("here");
}

