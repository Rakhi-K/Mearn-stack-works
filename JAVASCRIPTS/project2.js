//for having even or odd

// var num=5;
// var i=1;
// while (i<=5)
//  {
//     if (i%2!=0)  not equal to zero for odd....or if(i%2==0) for even
//      {
//         console.log(i);
//     }
//     i++
// }

// for displaying numbers
// var num=5;
// var i=5;
// while (i>=0) 
//  {
//      console.log(i);
//      i--;
// }


// //MULTIPICATION
// var num=10;
// var i=1;
// while (i<=10) 
// {
//   console.log(i*i); 
//   i++ 
// }





// //factorial
// var num=5;
// var i=1;
// var fact=1;

// while (i<=num) 
// {
//     fact=fact*i;  //1*1=1, 1*2=2, 2*3
//    i++ ; //1+1=2, 2+1=3
// }
// console.log(fact);


//SUM TILL 10

var limit=10;
var i=1,sum=0;
while (i<=10) {
    sum+=i;
    i++;
}
console.log(sum);


//reversing number

var num=123;
while (num!=0)
 {
    let digit=num%10;  //here let used inside loop
    console.log(digit);
    num=Math.floor(num/10)  //this is printed in  3 lines
}


//single line

var num=123; 
var res="";

while (num!=0) 
{
    let digit=num%10;        //here let used inside loop
    res+=digit;
    num=Math.floor(num/10)   //this is printed in  1 line
}

console.log(res);

 //cube of 1 2 3 + sum
var num=123; 
var res=0;

while (num!=0) 
{
    let digit=num%10;        //here let used inside loop
    res=res*10+(digit**3);
    num=Math.floor(num/10)   
}

console.log(res);




