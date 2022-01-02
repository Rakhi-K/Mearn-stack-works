var low = 5, upp = 17;

for (let i = low; i <= upp; i++) {
    let flag = 0;
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) {
            flag++;
            break;
        }

    }
    if (flag == 0) {
        console.log(i);
    }
}///check



//FUNCTION
//function functioname(par1,par2...parn){
    //function definition
    //return value
//}

function add(num1,num2){
    let res=num1+num2;
    return res
}

//calling function
console.log(add(10,20));


//cube
function cube(num){
    let res=num**3;
    return res
}
console.log(cube(3));

//adding
function add(x,y,z,a){
    let res=x+y+z+a;  ///or we can wirte return x+y+z+a
    return res
}
console.log(add(1,1,1,1));

//multipication
function multiply(c,d){
    let res=c*d;       // or return c*d
    return res
}
console.log(multiply(2,3));


//create functn for factorial of num

function factorial(num){
    let res=1;
    for (let i=1; i<=num; i++){
        res=res*i
    }
    return res
}
console.log(factorial(4));


//create funct- true if num is even, false if odd
 function iseven(num)
 {
     return num%2==0?"true":"false"
 }
  console.log(iseven(2));

 //FUNCTION TO RETURN LARGEST FROM TWO NUM

 function largestAmongTwo(x,y){
     return num1>num2?"x":"y"

 }
 console.log(largestAmongTwo(30,40));

           //OR

        
 function largestAmongTwo(num1,num2){
   
    if (num1>num2) {
        return num1
    } else {
       return num2
    }
}
console.log(largestAmongTwo(10,20));






