alert("Euler task 2")
function euler(a,b,n){
    let a = 0;
    for (let i = 0; i < n; i++){
        if (i % a === 0 || i % b === 0){
            a = a + i;
        }
    }
    return a
}

answer = euler(3,5,1000);
alert("a" +answer)