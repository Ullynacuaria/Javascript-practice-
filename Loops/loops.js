// if block inside a while loop
let i = 1;
console.log("Even intergers from 1 to 20");
while(i <= 20){

    let num = i % 2;
    if(num == 0){
        console.log(i);
    }
    i++
}

//Using Break while loop
console.log("Increasing order of series (with Break): ");
let y = 2;

while(y <= 10){
    console.log(y);
    y++;

    if(y == 5){
        break;
    }
}

//Using continue
console.log("Decresing order of the series (with continue):")

let d = 11;

while(d > 1){
    console.log(d);
    d--;

    if(d == 5){
        continue;
    }
    console.log(d);
}

//for loop
console.log("Fibonacci series using for loop")

let a = 0; b = 1; 
let c;
let count = 10;

for(let i = 3; i <= count; i++){
    
    c = a + b;
    a = b;
    b = c;

    console.log(c);
}