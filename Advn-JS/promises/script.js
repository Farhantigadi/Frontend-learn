// let promise = new Promise((resolve,reject)={

// })

function getData(dataId,nextdata){
   
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
      console.log(`data is ${dataId}`);
      resolve("success");
      if(nextdata){
        nextdata();
      }
                 
        }, 5000);
     });
    
}

//how actually promises are used using .then() and .catch()
const getpromise = ()=>{
return new Promise((resolve,reject)=>{
    console.log("I am promise");
    // resolve("Order fulfilled");
    reject("Some error occured")
});
}

let promise = getpromise();
promise.then((res)=>{
console.log("successful",res);

});
promise.catch((err)=>{
    console.log("Error occured",err);
    
    });
    // this res is messegae passed during resolve and same err
    
    
    function asynfun1(){
        return new Promise((resolve,reject)=>{
           setTimeout(()=>{
            console.log("data1 is fetched");
            resolve("success");
           },4000)
        });


    };
    function asynfun2(){
        return new Promise((resolve,reject)=>{
           setTimeout(()=>{
            console.log("data2 is fetched");
            resolve("success");
           },4000)
        });
    };
/* in this its directly printing the two data result without waiting for the first intrsuction to get fetched first for 4s then after 4s the second data sholud be printinted 
    let p1=asynfun1();
    
    p1.then((res)=>{
        console.log(res);
    });
    
    let p2 = asynfun2();
    p2.then((res)=>{
        console.log(res);
    });
    */

    // to solve that we can do something like this
    let p1=asynfun1();
    
 p1.then((res)=>{
        console.log(res);
        let p2=asynfun2();
        p2.then((res)=>{
        console.log(res);

    })
 });