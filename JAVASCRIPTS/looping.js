///while & for stsmts

// var i=1;

// while (i<=5)          //if cond is true..then only it enters to block  1<5, 2<5,3<5,4<5,5<=5
//  {
//    console.log(i);   // output is 1 
//    i++;              // here increment is used  till i<=5  2,3,4,5,6
// }

// console.log(i);      // here output is 6 as last i is increment till 6



// // 5 to 1
// var i=5
// while (i>=0)
//  {
//     console.log(i);
//     i--;
// }



// // print even from 1-8

// var num=8;
// var i=1;   

// while (i<=num)          //checks- 1<=8, 2<=8, 3<=8
//  {
//      if (i%2==0) {       //checks- 1%2==0, 2%2==0, 3%2==0
//         console.log(i);
//      }
//    i++
// }



//odd numbers

var num=8;
var i=1;

while (i<=8)  
 {
   if (i%2!=0) // i%2 != 0
   {
       console.log(i);
   } 

   i++;
}

// FACTORIAL 

var num=5;
//we need 1*2*3*4*5*  so start frm 1

var i=1;
var fact=1;

while (i<=num) 
{
    fact=fact*i;
   i++ ;
}
console.log(fact);






