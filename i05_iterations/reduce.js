let mynum=[1,2,3]
let initialval=0
let newnum=mynum.reduce(function(acc,currentval){
    console.log(`acc val: ${acc},currval: ${currentval}`);
   // console.log(acc+currentval); //:expected output after each process
    
    return acc+currentval
},initialval)  // here intialval is declared 0 but we can provide any number from which we want to start
console.log(newnum);

//by using arrow funtion 
let num2=mynum.reduce((acc,currentval)=>acc+currentval,0)
console.log(num2);

const pricesINR = [100, 200, 300];
const pricesUSD = pricesINR.map(price => price * 10);
console.log(""+pricesUSD); // [1.2, 2.4, 3.6]

let cart=[
    {
        name : "farhan",
        item : "bag",
        price : 800
    },
    {
        name : "farhan",
        item : "bag",
        price : 500
    },
    {
        name : "farhan",
        item : "bag",
        price : 400
    }
];
let totalprice=cart.reduce((acc,product)=>{
    return acc+product.price
},0)
console.log(totalprice);
