/*
let body =document.querySelector("body");
let button = document.querySelectorAll(".button")
button.forEach((button)=>{
    button.addEventListener('click',(item)=>{
        console.log(item);
        
        console.log(item.target);
        
if(item.target.id === "grey"){
    body.style.backgroundColor =item.target.id;
}
else if(item.target.id === 'yellow'){
    body.style.backgroundColor =item.target.id;
}
else if(item.target.id === 'white'){
    body.style.backgroundColor =item.target.id;
}
else if(item.target.id === 'blue'){
    body.style.backgroundColor =item.target.id;
}
    })
})*/

let body = document.querySelector("body");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const color = event.target.id;
        body.style.backgroundColor = color;
    });
});


