var arr = [10, 11, 14, 13, 12, 2, 3, 100]
//acsending order - sorted

//num1-num2 == indicates num1 is first then only num2 comes
arr.sort((num1, num2) => num1 - num2)
console.log(arr);


//descending
// arr.sort((num1,num2)=>num2-num1)
// console.log(arr);

var arr = [2, 5, 9, 4, 8, 3, 7, 1, 0, 6]
arr.sort((num1, num2) => num1 - num2)
console.log(arr);





//SORTING AND FINDING NUM
var arr = [10, 11, 14, 13, 12, 15]
arr.sort((num1,num2)=>num1-num2)
var element = 12;
var low = 0, upp = arr.length - 1;
var flag=0;


while (low <=upp) 
{
    mid = Math.floor((low + upp) / 2);
    //case1
    if (element < arr[mid]) {
        upp=mid-1;

    }
    else if (element > arr[mid]) {
        low=mid+1;

    }
    else if (element==arr[mid]) 
    {
        flag=1;
        break;
    }
    

}
// if (flag==0) {
//     console.log("element not found");
// }
// else{
//     console.log("element found");
// }
//or
console.log(flag==0?"element not found":"element found");



//COMMON ELEMENT
var arr1=[10,11,12,20,21]
var arr2=[20,21,22,23,24]

arr1.sort((num1,num2)=>num1-num2)
arr2.sort((num1,num2)=>num1-num2)

var pos1=0;
var pos2=0;
var count=0;

while ((pos1<arr1.length) & (pos2<arr2.length))      // while 0<5 (till 4 i,e length)
{
  if (arr1[pos1]==arr2[pos2]) 
  {
      console.log(arr1[pos1]);
      pos1++;
      pos2++;
  } 
  else if(arr1[pos1]<arr2[pos2]) {
      pos1++;
  }
  else if (arr1[pos1]>arr2[pos2]) {
      pos2++;
  }
  count++;
}
 console.log("iteration count",count);














