let n = 123;
console.log("Value of integer n = ", n);

n = 12.345;

//Implicit type conversion

console.log("New value of floating point = ", n);
console.log("145e4 = ", 145e4);
console.log("145e-4 = ", 145e-4)

//Convert the string to an int
console.log("20 * '20' = ", 20 * "20");
console.log("'20' * 20 = ", "20" * 20);

//Special number(infinity)
console.log("Infinity = ", Infinity);

//Special field available wthin the number library
console.log("POSITIVE_INFINITY will return : ", Number.POSITIVE_INFINITY);
console.log("1 / 0 = ", 1/0);

console.log("NEGATIVE_INFINITY will return: ", Number.NEGATIVE_INFINITY);
console.log("-1 / 0 = ", -1/0);

//Dividing a String by an Integer
console.log("String divided by integer: ", "A string" / 2);

//Defining number using hexadecimal(add: 0x to the hexadecimal value)
console.log("Value of 0xEF: ", 0xEF)

//Conversion of integers to number Using the toString method
const num = 16;
console.log("The binary value of 16 is: ", num.toString(2));
console.log("The octal decimal value of 16 is: ", num.toString(8));
console.log("The  decimal value of 16 is: ", num.toString(10));
console.log("The hexadeciaml value of 16 is : ",num.toString(16));
console.log("The duo trigesimal or base-32 value od 16 is:", num.toString(32));

//View the type of variable using typeof
const a = 10;
console.log("Type of number before toString(): ", typeof a);

const b = a.toString();
console.log("Type of number after toString(): ", typeof b);

//Using toFixed() method to perform a rounding operation to a specified number
const x = 3.4567;
console.log("3.4567 rounded to 0 decimals: ", x.toFixed(0));
console.log("3.4567 rounded to 2 decimals: ", x.toFixed(2));
console.log("3.4567 rounded to 5 decimals: ", x.toFixed(5));

//Using toPrecision() to get the number of digitis we would like in total
const y = 25.678;
console.log("Value of 25.678 without specifying precision: ", y.toPrecision());
console.log("Value of 25.678 when precision is 2: ", y.toPrecision(2));
console.log("Value of 25.678 when precision is 5: ", y.toPrecision(5));

//Some of the constants available in the number library( Maximum and Minimun numerical values)
console.log("MAX_VALUE will return: ", Number.MAX_VALUE);
console.log("MIN_VALUE will return: ", Number.MIN_VALUE);




