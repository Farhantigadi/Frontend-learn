function callData(data){
console.log(`data ${data}`);
}
callData(121);

//if we want  two data but with 2s delay for each them then we use callback fun in this way 

function getData(dataId,getNextData){
   setTimeout(()=>{
    console.log(`"data is ${dataId}`);
    if(getNextData){       //if 11 ,12,13 not present then it will be printed only one time
        getNextData();
    }
   },3000)
}
/* for two data
getData(2,()=>{
    getData(3);
});
*/

//for three data
//these is only callback hell and it is not good way of writing the code

getData(3,()=>{
    getData(4,()=>{
        getData(5,()=>{
            getData(6);
        });
    })
});
//to solve this problem we have concept called promises
