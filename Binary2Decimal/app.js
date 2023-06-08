function ConvertToDecimal(){
    let binary = document.getElementById('binary').value;
    document.querySelector(".result").innerHTML = `Decimal Number : ${parseInt(binary,2)}`;
}