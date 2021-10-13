// class Set{
// add(object){

// }
// }



  //SET - IN SET- ONLY UNIQUE VALUES- NO DUPLICATES
var st= new Set()
st.add(10)
st.add(10)
st.add(30)

console.log(st); - // output

console.log(st.has(10)); //find elemnt in obj in set- has - used







//FUNCTION-  if more than 2 elements- ...args used
function add(...args){
    return args.reduce((num1,num2)=>num1+num2)
}
console.log(add(10,20,30,40,50));




//functn using more than 2 args and finding max
function getMax(...args){
    return args.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(getMax(10,20,30,40,50));


var text= "hhlello haaiii"
//1) split into array
var words= text.split(" ")
for (word of words){
    let st = new Set()
    for(let char of words){
      st.add(char)
    }
 console.log(st);
}






 