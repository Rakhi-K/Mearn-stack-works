var age=19;

// if , if else 

if (age>17) {
    console.log("you are eligible");
} else {
    console.log("you are  not eligible");
}



// neg or positive

var num=-5;

if (num>0) {
      
       console.log(true);
    } 
       else {
        console.log(false);
   
}

var num=0;

if (num>0) {
    console.log("+ve");
} 
else if(num<0){
    console.log("-ve");
    
}
else{
    console.log("number is zero");
}



// largest

var num1=10,num2=20

if (num1>num2) {
    console.log(true);
    
} else {
    console.log(false);
}



var num1=10,num2=20

if (num1>num2) {
    console.log(`${num1} highest number`);   
} 

else if(num1<num2) {
    console.log(`${num2} highest`);
}


else{
    console.log("both are equal");
}



// 3 numbers

var num1=10, num2=20, num3=30;

if ((num1>num2) & (num1>num3) )  //10>20 &10>30 false
 {
    console.log(`${num1} highest number`);   
} 

else if((num2>num1) & (num2>num3))   //20>10 & 20>30 false
 {
    console.log(`${num2} highest`);
}

else if((num3>num1) & (num3>num2)) //30>10 & 30>20 true
{
console.log(num3);
}

else{
    console.log("all are equal");
}




console.log( "hello");



