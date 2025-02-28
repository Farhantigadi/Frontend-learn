const mynum=[1,2,4,5,7,8]
let newnum=mynum
.map((num)=>num*2)
.map((num)=>num+1)
.filter((num)=>num>10)
console.log(newnum);
