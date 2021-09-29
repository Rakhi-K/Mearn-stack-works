var arr=[2,3,4,5,6]


//MAPPING- 1 value input

//SQUARE
//normally
var square=[]
for(let num of arr){
    square.push((num**2))
 
}
console.log(square);

//in arrow
var squares=(num)=>num**2



//FOR MAPPING- ONE ARGUMENT IS PASSED
var cubes=arr.map((num)=>num**3)
console.log(cubes);

var squares=arr.map((num)=>num**2)
console.log(squares);


//FILTER- used if condtn is applied to each obj in array

//for having square,cube-- MAPPING FUNCTN

var employees=[

    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//to print salary less thean 15000, developer nme- these are condtn to be applied- so filter used
//TO HAVE NAMES PRINTED- MAPPING

var employee_name=employees.map((emp)=>emp[1])  //here emp is -- for (let emp of employees)
console.log(employee_name);

var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]
// print number of items in shop   
console.log(products.length);


// print number of available items
stock=0;
for(let items of products){
    if (items[3]>0) {
        stock++;
    }
}
console.log(stock);


// print all product names only

var num=products.map((count)=>count[1])
console.log(num);


//FILTER METHOD- 1 value input

var arr=[2,3,4,5,6]

//even
var even=arr.filter(num=>num%2==0)
console.log(even);



//greater than 3
var greater=arr.filter(num=>num>3)
console.log(greater);




var names=["ajay","arun","akash","revin"]
//with a
var sel= names.filter(names=>names[0]=="a")
console.log(sel);



var arr=[2,3,4,5,6,7]
var odd_num=arr.filter(num=>num%2!==0)
console.log(odd_num);

var employees=[

    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

//developer details- print
var developers=employees.filter(employee=>employee[3]=="developer")
console.log(developers);   //here entire array is printed

var developers=employees.map(employee=>employee[3])
console.log(developers); //here only [3]is returned

//FUSION- MAP+FILTER - chaining

//PRINT NAMES OF EACH BA- TOM,JACK

var analyst=employees.filter(emp=>emp[3]=="ba").map(emp=>emp[1])
console.log(analyst);

//print developers name- akhil ,nikhil
var dev=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1])
console.log(dev);



var arr=[2,3,4,5,6,7]

//print sq of evn num

var even_num=arr.filter(num=>num%2==0).map(num=>num**2)
console.log(even_num);

var employees=[

    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

//print devlp name whose exp greater than 6years -& condtn used

var dev_name=employees.filter(emp=>(emp[3]=="developer") & ((emp[5]-emp[4])>6)).map(emp=>emp[1])
console.log(dev_name);


//add bonus for all developers

var dev_bonus=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+=5000)
console.log(dev_bonus);


var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]


//print all avl prd
var avl_prd=products.filter(item=>item[3]>0)
console.log(avl_prd);

//print out of stock name
var out_prd=products.filter(item=>item[3]==0).map(item=>item[1])
console.log(out_prd);

//add 5 rs offer for all prd whose stock>50
var offer=products.filter(item=>item[3]>50).map(item=>[item[1], (item[2]-=5)])
console.log(offer);


//SORT , REDUCE - 2 PARAMETERS USED- NUM1 - NUM2 CONDTN USED
//sort stock wise

products.sort((item1,item2)=>item2[3]-item1[3])
console.log(products);

//prices wise descending
products.sort((item1,item2)=>item2[2]-item1[2])
console.log(products);

var employees=[

    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//exp sort
employees.sort((item1,item2)=>(item2[5]-item2[4])-(item1[5]-item1[4]))
console.log(employees);


//salary
employees.sort((item1,item2)=>item2[2]-item1[2])
console.log(employees);

//dev salary sort
var res=employees.filter(emp=>emp[3]=="developer").sort((emp1,emp2)=>emp1[2]-emp2[2])
console.log(res);



//REDUCE METHOD
//to single value output
//eg: for total sum, max element, min
//2 values input

var arr=[2,3,4,5,6,7]

//sum
var total= arr.reduce((num1,num2)=>num1+num2)
console.log(total);

//max
var max= arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);

//min
var min= arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);




var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
    [101,"GOODDAY",20,70]

]

//highest price output
var costly_prd= products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(costly_prd);

//lowest
var low_cost= products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(low_cost); //here last - left item is output

//if same prd same rate - adil lowest- always last one is coming as output- by default
//if needed first low rate- we use-  REDUCERIGHT

var low_cost= products.reduceRight((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(low_cost); //so here comparing - first lowest is output


//FIND
//search element from array
//first output is found and output is made

var search_item=products.find(item=>item[1]=="treat")
console.log(search_item);

var search_item=products.find(item=>item[2]==20)
console.log(search_item);  //HERE FIRST FINDING SINGLE IS OUTPUT OR FILTER IS USED FOR ALL THE PRDCTS WITH SAME RATE




//SOME()- question- to get item below 10 - it return - boolen values- whether true or false
var avl_prd= products.some(item=>item[2]<10)
console.log(avl_prd);

//greater than 30
var avl_prd= products.some(item=>item[2]>30)
console.log(avl_prd);


//FOR EACH
//For name

var  name= products.map(item=>item[1])
console.log(name); //  in array


//instead

products.map(item=>item[1]).forEach(names=>console.log(names)); //here on in array- each names

//prd>30
products.filter(item=>item[2]>30).forEach(item=>console.log(item));