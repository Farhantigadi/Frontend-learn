const { log } = require("async")


function getdata(data){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
   console.log(`data is ${data}`);
   resolve("sucesss")
   
    },3000)
})
}
async function callData(){
    console.log("calling data 1....");
    await getdata(1);
    console.log("calling data 2....");
    await getdata(2);
    console.log("calling data 3....");
    await getdata(3);
    console.log("calling data 4....");
    await getdata(4);
    console.log("calling data 5....");
    await getdata(5);
    console.log("calling data 6....");
    await getdata(6);

}