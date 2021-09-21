//array- data strucures- for organising data- 
//for efficiency,updation, deletion, insertion
//types- array, objects
//array- squential memmory location is value stored
//object- in key word memory value is used




//in ARRAY- DIFF &SAME TYPES OF DATA STORED....NO FIXED LIMIT

//INSERTED ORDER IS USED AS SAME PROCESSED ORDER- INPUT ORDER-OUTPUT
// ORDER- PRESERVED ORDER IN ARRAY

//INDEX USED - AS PRESERVED ORDER FOR ARRAY
var expenses=[1000,2000,3000,4000,5000,6000]
console.log(expenses);

//INDEX POSITION USED - FROM 0 TH
//FETCHING ARRAY ELEMENTS
console.log(expenses[1]);




//ITERATION
//to print till 0-5

// for (let i=0; i<6; i++){
// console.log(expenses[i]);          // PRINT ALL THE EXPENSES- HERE WE CAN CHNAGE THE LENGTH
// }


// FRO HAVING THE LIMIT WITHIN WE DO 

for(let i=0; i<expenses.length; i++){   // here i<array.length- length is fixed
    console.log(expenses[i]);
}


//IERATING WITH "of-operator"
var expenses=[1000,2000,3000,4000,5000,6000]

for (let amount of expenses){
    console.log(amount);
}


//TOTAL OF ARRAY
var total=0;
for(let amount of expenses){
    total+=amount
}
console.log(total);

//PRINT ALL EXPENSES <3000

var expenses=[1000,2000,3000,4000,5000,6000];
 for (let amount of expenses){
     if (amount<3000) {
         console.log(amount);
     }
 }


 //ADD 3000 RS WITH MARCH EXP
 var expenses=[1000,2000,3000,4000,5000,6000];
 expenses[2]+=3000;
 console.log(expenses);


 //ADD JULY EXP
 //expenses.push- inserting element to end of array

 expenses.push(7000)  //this is class method- so for push ()is taken
 console.log(expenses);

//remove last element from end
//pop()

expenses.pop()
console.log(expenses);





