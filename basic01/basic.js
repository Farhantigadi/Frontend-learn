// function greet(name){
//     console.log(`hello,${name}`);
// }
// greet("farhan");

// let colours=["orsnge","blue","green","yello"];
// console.log(colours);
// for(let i=0;i<colours.length;i++){
//     console.log(colours[i]);
// }

let student={
    nam:"farhan",
    age:21,
    marks:[45,46,45]

};
let total=0;
for(let i=0;i<student.marks.length;i++){

     total= total+student.marks[i];
}
let avg=total/student.marks.length;
console.log(`${avg}`);
 var a=[1,3,4,64,5];
 var b=[...a];
 b.push(121);
 
 a.forEach(function(val){
    console.log(val+2);
 });
 var obj={
    name:"faran",
    age:21
 };
 for(var key in obj ){
    console.log(key,obj[key])
 };

 for(let a=1;a<10;a++){
   console.log(a++);
 }
 const o1={
   name:"farhan",
   age:21,
   hobbies:["chess,bat,badminton"]
 }
 const details={
   education:"degree",
   proffession:"software engineer"
 }
 const full=Object.assign({},o1,details);
 console.log(full);
 
 
