var arr = [2, 3, 4, 5, 6, 7, 8];  //op[1,2,3,7,8,9]

var op = []

for (let num of arr) {
  if (num < 5) {
    op.push((num - 1))
  }


  else {
    op.push((num + 1))
  }

}
console.log(op);

var op = []  //op[1,2,3,5,7,8,9]

for (let num of arr) {
  // if(num<5)
  // {
  //    op.push((num-1))
  // }


  // else if(num>5)
  // {
  //   op.push((num+1))
  // }
  // else{
  //     op.push(num)
  // }

  //3 conditons
  num < 5 ? op.push(num - 1) : num > 5 ? op.push(num + 1) : op.push(num)
}
console.log(op);





//lowest

var expenses = [10000, 13000, 7000, 14000, 15000, 16000, 25000]

let low_exp = expenses[0];

for (let amount of expenses) {
  if (low_exp > amount) {  //till 7000varumbol..true avumbol and goes into lop and print maount...ani aaamount-7000 vech aan mele conditn till 25000 pone
    low_exp = amount;    //
  }

}
console.log(low_exp);




//highest
let high_exp = expenses[0];
for (let amount of expenses) {
  if (high_exp < amount) {  //till 7000varumbol..true avumbol and goes into lop and print maount...ani aaamount-7000 vech aan mele conditn till 25000 pone
    high_exp = amount;    //
  }

}
console.log(high_exp);

//exceed the amunt 14000
let count = 0;
for (let amount of expenses) {
  if (amount > 14000) {
    count++;
  }
}
console.log("exp>14000 count", count);

//avg

// var total_exp=0;
// for (let amount of expenses){
//   total_exp+=

// console.log((total_exp/expenses.length));
// }



var arr = [2, 4, 6, 3] //[13,11,9,12]
var total = 0;
for (let num of arr) {
  total += num   //here first total vech
}
var op = []
for (let num of arr) {
  let res = total - num;  // aa total in num subtract chyd
  op.push(res)
}
console.log(op);



//sum

var arr = [1, 2, 3, 4]
var ele_pair = 5;
for (let i = 0; i < arr.length; i++) //here  index i=0 is started. as i and j same is not needed we take j=1
{

  for (let j = 1; j < arr.length; j++) //j=1 index of j is started as 1
  {
    if (arr[i] + arr[j] == ele_pair) // here indexof i and j is taken
    {
      console.log(`element pair ${arr[i]} ${arr[j]}`);
      break;
    }
  }
}


