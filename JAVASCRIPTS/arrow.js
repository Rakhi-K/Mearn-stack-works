//no name for the function in arrow function
//ARROW FUNCTION

//FOR SINGLE LINE RETURN AND BRACES IS NOT NEEDED
var add=(num1,num2)=>num1+num2;

console.log(add(10,20));




var multiply=(num1,num2)=>{
    return num1*num2;
}
console.log(multiply(10,20));




var sub=(num1,num2)=>{
    return num1-num2;
}
console.log(sub(10,20));



//SINGLE LINE-  NO CURLY BRACES,AN DRETURN NEEDED
var mul=(num1,num2)=>num1*num2;
console.log(mul(6,2));

var div=(num1,num2)=>num1/num2;
console.log(div(80,2));



// var name="arun"
// function isStartWithA(name){
   
//     return name[0]=="a"?true:false
// }

// var isStartWithA=(name)=>name[0]=="a"?true:false
// console.log(isStartWithA(amit));

var even=(num)=>num%2==0?true:false
console.log(even(5));

//to have sub any two num always sub high from low- alwways output positive

// function sub=(num1,num2){
//     if (num1>num2) {
//         return num1-num2;
//     }
//     else{
//         return num2-num1
//     }
//    num1>num2?
// }

var sub=(num1,num2)=>num1>num2?num1-num2:num2-num1
console.log(sub(20,10));

//largest amoung two
var largest=(num1,num2)=>num1>num2?num1:num2
console.log(largest(20,30));