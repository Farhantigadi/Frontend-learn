const arr=[11,12,13,14,15,16];
console.log(arr)
const narr=arr.slice(1,3);
console.log("slice",narr);
console.log("after slice",arr);
const narr1=arr.splice(1,3);
console.log("splice",narr1);
console.log("after splice",arr);
console.log(arr.shift);
console.log("after opration",arr);
const arr2=[12,4,5,4,5];
const all=arr.concat(arr2); 
console.log(all)
