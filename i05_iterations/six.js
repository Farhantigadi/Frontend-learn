const num=[44,2,3,4,5,6,7]

const val=num.forEach((nums)=>{
//console.log(nums);
return nums
  
})
console.log(val);
const a=num.filter((item)=> item>4 )
console.log(a);

const b=num.filter((item)=> {
   // item>4  :  without return keyword,output will be undefined only if braces(scope) opened
  return item>3  //with return output is printed
} )
console.log(b);


