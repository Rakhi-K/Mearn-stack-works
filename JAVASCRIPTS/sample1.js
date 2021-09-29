//COMMON ELEMENTS

var arr1 = [10, 20, 21, 22]
var arr2 = [11, 12, 20, 21]
var count=0;  //to hve count of iteration

for (let num1 of arr1) {
   for(let num2 of arr2){
       if (num1==num2) {
           console.log("common element",num1);
           
       }
       count++
   }
}
console.log(count);





//DUPLICATE ELEMENTS
// var arr = [10, 11, 12, 11, 10]


// for (let amount of arr)


//SEARCHING element  -- LINEAR SEARCHING-EACH ELEMENT IS SEARCHED IN ARRAY(COMPARED)

var arra=[10,11,12,13,14]
var element=13, flag=0;

for (let num of arra){

    if (num==element) {  //true case
        flag+=1
        break;
    }
    
}

if (flag==0){  //false case 
  console.log("element not found");
}

else{
    console.log("element found");
}

//TO AVOID LINEAR- BINARY IS USED

