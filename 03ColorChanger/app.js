const  randomColor = () =>{
    let val = "0123456789ABCDEF"
    let cons = "#"
    for (let i=0 ; i<6 ; i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return cons
}
let btn = document.querySelector("#button")
btn.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = randomColor();
    document.querySelector("#canvas").style.backgroundColor = randomColor();
})

