alert("Taks 01");
a=3;
b=5;
n=1000;

let sum=0;

for(let i=0; i<n;i++){
    if(i%3 == 0 || i%5==0){
        sum += i;
    }
}
alert("sum of multiples of 3 or 5 :" + sum);