//OBJECT TYPE
// {}- DEFINE
//STORED AS KEY.VALUE PAIRS


var employee= {id:1000, emp_name:"ram", design:"developer", salary:25000}

//accessed by KEY

console.log(employee["salary"]);
console.log(employee["emp_name"]);

//or

console.log(employee.salary);
console.log(employee.emp_name);


//employee salary access - updating  to 30000
employee["salary"]=30000
console.log(employee);

//chck gender key is present or not
console.log("gender" in employee);

//add gender in object
employee["gender"]= "male"
console.log(employee);



var student= {roll:10, name:"Rakhi", course:"BCA", total:780}
//name
console.log(student.name);

//course
console.log(student["course"]); // or 
console.log(student.course);

//update total=800
student.total=800
console.log(student);

//check grade is present or not
console.log("grade"in student);

//add grade ='a+'
student["grade"]="A"
console.log(student);

//add total+=20
student.total+=20
console.log(student);

//check batch is there or nnot - if not add batch mearns atck
if("batch" in student){
    console.log("true");
}
else{
    student.batch="mearnstack"
}
console.log(student);



//PRODUCTS

var products={p__code:100, name:"prd1", price:250, avl_qty:50}
//print names
console.log(products.name);


//update stock+=30
products.avl_qty+=30
console.log(products);

//chck dicnt key present or not
console.log("discount" in products);

//add discnt 30%
products["discount"]="10%"
console.log(products);


var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance
accounts.sort((num1,num2)=>num1[3]-num2[3])
console.log(accounts);

// print details of acno=1004
var account=accounts.filter(emp=>emp[0]=="1004")
console.log(account);

// is there any person with balance < 2000
var account= accounts.some(item=>item[3]<2000)
console.log(account);

// print name of users with in_active account

// print details of user with max balance
 var account=accounts.reduce((acc1,acc2)=>acc1[3]>acc2[3]?acc1:acc2)
 console.log(account);


// print details of users with acc_type as savings and balance > 25000
var account= accounts.filter(acc=>(acc[2]=="savings") & (acc[3]>25000))
console.log(account);



var student= {roll:10, name:"Rakhi", course:"BCA", total:780}

//check batch is there or nnot - if not add batch mearns atck

if("batch" in student){
    console.log("true");
}
else{
    student["batch"]="mearnstack"
}
console.log(student);

for(let keys in student){
    console.log(keys);
    console.log(student[keys]);
}






//WORDCOUNT
 var text= "hai hello hai hello hai"


 //1) split into array
 var words= text.split(" ")
 // it comes as {"hai", "hello", "hai", "hello"}

 var wordcount={}

 for (let word of words){
     if (word in wordcount) {
         wordcount[word]+=1
     }
     else{
         wordcount[word]=1
     }
 }
 console.log(wordcount);


 var pattern="ABCABB"


 var wordcount={}

 for (let char of pattern){
     if (char in wordcount) {
        //  wordcount[char]+=1 // or 
         console.log(char, "is repeating");
         break;
     }
     else{
         wordcount[char]=1
     }
 }
 console.log(wordcount);

 