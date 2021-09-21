//increment1-5

for(let i=1; i<=5; i++){
    console.log(i);
}


//decrement 5-1
for(let i=5; i>=0; i--){
    console.log(i);
}





//for PRIME NUMBER

var num=7;
var flag=0;
                      //check whether its divided by 2,3,4,5,6  - not 1,7

for(let i=2; i<num; i++){              //if this condiion is true
   
   if (num%2==0) {                    //it goes here and if this is true it moves
                                      // to flag, or i increments to i++=+1
       flag+=1;
       break;  //outside loop
   }
}
console.log(flag==0?"prime":"not prime");



//for having cubes within limit.

var num=2;
low=8; upp=27;

for(let i=1; i<=upp; i++){
 // square- 1**2,2**2,3*2

let res=i**num;

//chek within limit

if( (res>=low) & (res<=upp)) {
    console.log(i);
}

}



var num=3;
low=8; upp=30;
for(i=1; i<=30; i++){
    let res=i**num;
      
    if ((res>=low)&(res<=upp)) {
       console.log(i);    //here or we can break
    }

}



// nested loop- for each row - one row needed & 
//each column one col needed- total 3row and 3 col

 for(let row=1; row<=3; row++){
     let str="";
     for(let col=1; col<=3;col++){
         str+=row
     }
     console.log(str);
 }

 123,123,123
 for(let row=1; row<=3; row++){
    let str="";
    for(let col=1; col<=3;col++){
        str+=col;
    }
    console.log(str);
}

// //
// var num=2;
// var res=0;
// for (let i=1; i<=num; i++){
//     res=res*10+num;
//      sum+=res
// }
// console.log(sum);    //check


var low=5,upp=17;

for(let i=low; i<=upp; i++)
{
    let flag=0;
  for (let j=2; j<=i;j++){
      flag++;
      break;
  }
  if (flag==0) {
      console.log(i);
  }
}