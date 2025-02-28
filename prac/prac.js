let myarr=[1,2,3,4,5,6]
let mystr="hello world"
for(const num of mystr ){
    if(num===' '){
        continue;
    }
    console.log(`each char is ${num}`) ;
    
}
let myobj=[
    {
        language:"java",
        spec:"strong"
    },
    {
         language:"python",
        spec:"weak"
    }
]
myobj.forEach((val)=>{
console.log(val.spec);

})
for (let key of myarr){
    //console.log(`num is ${key}`);
    console.log(key+1);
        
}