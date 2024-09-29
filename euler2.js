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
result = euler(a,b,x);
alert("sum :" + result)