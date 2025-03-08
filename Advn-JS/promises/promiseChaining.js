function getData(dataId,nextdata){
   
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
  console.log(`data is ${dataId}`);
  resolve("success");          
    }, 5000);
 });
};

getData(1)
.then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3)
}).then((res)=>{
    console.log(res);
    
})

// even thia is not really good to understand so thats why we use asyn await