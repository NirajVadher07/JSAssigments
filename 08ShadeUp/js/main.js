function randompickerbtn() {
    let val = "0123456789ABCDEF"
    let cons = "#"
    for (let i=0 ; i<6 ; i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }    
    document.querySelector("#randomValuePara").innerHTML = cons;
    document.getElementById("randomPicker").style.backgroundColor = cons; 
}

function hexFindbtn() {
    document.getElementById('color-box').style.backgroundColor = document.getElementById('hexInput').value;
}

function RGBFindbtn() {
    const r =  document.getElementById('RInput').value;
    const g =  document.getElementById('GInput').value;
    const b =  document.getElementById('BInput').value;
      

    document.getElementById('rgb-color-box').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function RangeSelector() {
    const r =  document.getElementById('RrInput').value;
    const g =  document.getElementById('GrInput').value;
    const b =  document.getElementById('BrInput').value;    
    document.getElementById('range-color-box').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

let redrange = document.getElementById('RrInput');
let greenrange =  document.getElementById('GrInput');
let bluerange = document.getElementById('BrInput');

redrange.addEventListener("change", () => {RangeSelector();} );
greenrange.addEventListener("change", () => {RangeSelector();} );
bluerange.addEventListener("change", () => {RangeSelector();} );

function hexConvbtn() {
    const hex =  document.getElementById('hexCInp').value;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
        
    document.getElementById('hexCOut').innerText = `${r} ${g} ${b}`; 
}

function rgbConvbtn() {
  const r =  Number( document.getElementById('RCInput').value );
  const g =  Number( document.getElementById('GCInput').value );
  const b =  Number( document.getElementById('BCInput').value );

  let hex  = "#"
  let r1 = r.toString(16);
  hex += r1.length == 1 ? "0" + r1 : r1;

  let g1 = g.toString(16);
   hex += g1.length == 1 ? "0" + g1 : g1;

   let b1 = b.toString(16);
   hex += b1.length == 1 ? "0" + b1 : b1;

   document.getElementById('rgbCOut').innerText = hex ;

}

// function RGBtoHex(r,g,b){
//     r = r.toString(16);
//     g = g.toString(16);
//     b = b.toString(16);

//     if (r.length == 1)
//         r = "0" + r;
//     if (g.length == 1)
//         g = "0" + g;
//     if (b.length == 1)
//         b = "0" + b;

//     return "#" + r + g + b;
// }