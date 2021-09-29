var accounts=[
    [1000,"ravi",15000,"savings"],
    [1000,"mohan",20000,"savings"],
    [1000,"saji",25000,"cuurent"],
    [1000,"akhil",30000,"current"],
]

//for account names
for(let account of accounts){
    console.log(account[1]);
}

//for accoun having savings
for (let account of accounts){
    if (account[3]=="savings") {
        console.log(account[1]);
        
    }
}

//for having savings more than 20000
for (let account of accounts){
    if (account[2]>20000) {
        console.log(account[1]);
    }
}


//example
var employees=[

    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

//no of employees
console.log(employees.length);

//no of employess developers
var developer_count=0;
for (let employee of employees){
    if (employee[3]=="developer") {
        developer_count++;
    }
}
console.log("developers=",developer_count);


//exp print
for (let employee of employees){
    console.log("exp=",(employee[5])-(employee[4]));
}
//OUTLIRE- if value is out of context- if age=200, exp=200 - if only one is mistake..others are ok

//highest salary
var high = 0;

for (let employee of employees)
{
    // [1000,"ram",15000,"hr",1990,2000],
    if (high<employee[2]) {  //0<15000  , the 15000<25000
        high=employee[2];  //true anel 15000 avum, true anel 25000 avumbol
    }
}
console.log("max salary=",high);


//lowest salary
var  low = employees[0][2]; // HERE EMPLOYEES[0][1]- MEANS IN MAIN ARRAY NAME- FIRST EMPLOYEE NAME

for (let employee of employees)
{
    // [1000,"ram",15000,"hr",1990,2000],
    if (low>employee[2]) {    //15000>15000, then 15000>25000, then if 15000>7000
        low=employee[2];  //15000 aan same,                       l> here 7000 is low
    }
}
console.log("low salary=",low);


// for (let employee of employees)
// {
//     // [1000,"ram",15000,"hr",1990,2000],
//     if (employee[2]==low) {
//         console.log(employee[1]);
//     }
// }

// // var low = 15000; var high = 40000;
// // for (let employee of employees){
// //     // [1000,"ram",15000,"hr",1990,2000],

// // for (employee[3] == "developer")
// //  {
// //         if (employee[2]==high) {
// //             console.log(employee[1]);
// //         }
// //     }
// // }

// for (let employee of employees){
//     if ((employee[5]-employee[4])>=25) {
//         console.log(employee[1]);
//     }
// }

