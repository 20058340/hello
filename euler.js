alert("Loaded Euler JS");
a=3;
b=5;
n=1000;

let sum=0;
for(let i=0; i<n;i++){
    if(i%3 == 0 || i%5==0){
        sum += i;
    }
}
alert("The sum of all multiples :" + sum);