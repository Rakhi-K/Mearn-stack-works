//  FIZ BIZ

// var num1 =3, num2=25, num3=65;

// if (num1/3)
//  {

//     console.log("fiz");
// } 
// else {
//     console.log("error");
// }

// if (num2/5)
//  {
//     console.log("biz");
// } 

// else{
//     console.log("error");
// }


//  if (num3/15)
//  {
//     console.log("fiz biz");
// }

// else{
//     console.log("error");
// }


 //SECOND LARGEST
var num1=10, num2=20, num3=30;
if ((num1>num2) & (num1>num3))
 {
    console.log(`${num1} is second largest number`);

} 
else if ((num2>num1) & (num2<num3)) {
    console.log(`${num2} is second largest number`);
}

else if ((num3>num1) & (num3<num2)) {
    console.log(`${num3}is second largest number`);
}
 else{
     console.log("all are same");
 }

 // EVEN OR ODD

var num=10;

var remainder= (num % 2)

if (remainder==0) 
{
    console.log("even");
} 
else 
{
    console.log("odd");
}



//FOR ASCENDING ORDER // FOR DESCENDING ORDER GREATER SIGN USED

var x= 0;
var y=-1;
var z= 4;
if (x<y && x<z)  //0>-1 0>4  here main is x. below then y and z is considered
{
        if (y<z)   //-1>4 here y is checked
        {
            console.log(`${x} ${y} ${z}`);
        }
        else // here z is checked
        {
            console.log(`${x} ${y} ${z}`);
        }
}

else if (y<x && y <z)
{
        if (x<z)
        {
             console.log(`${y} ${x} ${z}`);
        }
        else
        {
             console.log(`${y} ${z} ${x}`);
        }
}

else if (z<x && z<y)
{
        if (x<y)
        {
            console.log(`${z} ${x} ${y}`);
        }
        else
        {
            console.log(`${z} ${y} ${x}`);
        }
}       
//  //DESCENDING ORDER

// var x=5;
// var y=6;
// var z=7;

// if ((x>y) & (x>z))
//  {
//     if (y>z) {
//         console.log(`${x} ${y} ${z}`);
//     } else {
//         console.log(`${x} ${z} ${y}`);
//     }
// }

// if ((y>x) & (y>z)) 
// {
//     if (x>z) {
//         console.log(`${y} ${x} ${z}`);
//     } else {
//         console.log(`${y} ${z} ${x}`);
//     }
// }

// if ((z>x) & (z>y))
//  {
//     if (x>y) {
//         console.log(`${z} ${x} ${y}`);
//     } else {
//         console.log(`${z} ${y} ${x}`);
//     }
// }


//SWAPING NUMBERS


var a=5;
var b=10;
var c=a;
a=b;
b=c;

console.log( `a is ${a}`);
console.log( `b is ${b}`);



