alert("Euler task 3")
function euler(a,b,n){
    sum = 0;
    for (let i = 0; i < n; i++){
        if (i % a === 0 || i % b === 0){
            sum = sum + i;
        }
    }
    return sum
}

function euler(){
    let a = number(document.getElementById("a").value);
    let b = number(document.getElementById("b").value);
    let n = number(document.getElementById("n").value);
    let result = euler(a,b,n);
    alert("sum :" +result)
}

