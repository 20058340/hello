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

function eulers(){
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    x = parseInt(document.getElementById("x").value);
   
}
result = euler(a,b,x);
alert("sum = " + result)