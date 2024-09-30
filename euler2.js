alert("Euler task 3")
function euler(a,b,n){
    let sum = 0;
    for (let i = 0; i < n; i++){
        if (i % a === 0 || i % b === 0){
            sum = sum + i;
        }
    }
    return sum
}

function euler(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);
   

}
let result = euler(a,b,n);
    alert("sum :" +result)

