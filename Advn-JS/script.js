//how asynworks
console.log("one");
console.log("two");

setTimeout(()=>{
console.log("Hello");

},5000)
console.log("three");
console.log("four");

//callback function

function sum(a,b){
    console.log(a+b);
    
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,sum);

//another approach for callback function
calculator(4,2,(a,b,)=>{
console.log(a+b);

});

//setimeout takes callback
const hello =()=>{
    console.log("hello world");  
}
setTimeout(hello,4000);

//Nesting
//writing if in the if(nested if-else) or loop inside the loop
const age = 19;
if(age>18){
    if(age>60){
        console.log("senior");   
    }else{
        console.log("middle");   
    }
}else{
    console.log("child");
    
}