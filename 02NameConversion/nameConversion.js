let btn  = document.querySelector("#convert-btn");

btn.addEventListener('click', ()=>{
    let str = document.querySelector("#text").value;
    camel(str);
    pascal(str);
    snake(str);
    screamingsnake(str);
    kebab(str);
    screamingkebab(str);
})
//required changes 
function camel(str){
    let a  = document.querySelector("#camel-case");
    let answer = str.split(' ')
    .map(a => a.trim())
    .map(a => a[0].toUpperCase() + a.substring(1))
    .join("")
    answer = answer[0].toLowerCase() + answer.substring(1)
    a.innerText = answer;
}
function pascal(str){
    let a  = document.querySelector("#pascal-case")
    let answer = str.split(' ')
    .map(a => a.trim())
    .map(a => a[0].toUpperCase() + a.substring(1))
    .join("")
    a.innerText = answer;
}

function snake(str){
    let a  = document.querySelector("#snake-case")
    let answer = str.split(' ')
    let temp="";
    for(let i=0 ; i<answer.length ; i++){
        temp += i == (answer.length-1) ? (answer[i]) :(answer[i]+"_")
    }
    a.innerText = temp;
}

function screamingsnake(str){
    let a  = document.querySelector("#screaming-snake-case")
    let answer = str.split(' ').map(a => a.toUpperCase())
    let temp="";
    for(let i=0 ; i<answer.length ; i++){
        temp += i == (answer.length-1) ? (answer[i]) :(answer[i]+"_")
    }
    a.innerText = temp;
}
function kebab(str){
    let a  = document.querySelector("#kebab-case")
    let answer = str.split(' ')
    let temp="";
    for(let i=0 ; i<answer.length ; i++){
        temp += i == (answer.length-1) ? (answer[i]) :(answer[i]+"-")
    }
    a.innerText = temp;
}

function screamingkebab(str){
    let a  = document.querySelector("#screaming-kebab-case")
    let answer = str.split(' ').map(a => a.toUpperCase())
    let temp="";
    for(let i=0 ; i<answer.length ; i++){
        temp += i == (answer.length-1) ? (answer[i]) :(answer[i]+"-")
    }
    a.innerText = temp;
}