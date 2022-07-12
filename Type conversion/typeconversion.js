let num = 25;
let str = "350";
let boolean = true;
let date = new Date('2022-07-22');

console.log("Type of num: ", typeof(num));
console.log("Type of str: ", typeof(str));
console.log("Type of boolean: ", typeof(boolean));
console.log("Type of date: ", typeof(date));

//Type conversion
let num_str = String(num);
let str_num = Number(str);
let boolean_str = String(boolean);
let boolean_num = Number(boolean);
let date_str = String(date);
let date_num = Number(date)

//number to a string
console.log("Type of num cast to a String: ", typeof(num_str));
console.log("Value of num cast to a String: ", num_str);
//string to a number
console.log("Type of str cast to a Number: ", typeof(str_num));
console.log("Value of str cast to a Number: ", str_num);
//boolean to a string
console.log("Type of boolean cast to a String: ", typeof(boolean_str));
console.log("Value of boolean cast to a Sring: ", boolean_str);
//boolean to a number
console.log("Type of boolean cast to a Number: ", typeof(boolean_num));
console.log("Value of boolean cast to a Number: ", boolean_num);
//date to a string
console.log("Type of date cast to a String: ", typeof(date_str));
console.log("Value of date cast to a Sring: ", date_str);
//date to number
console.log("Type of date cast to a String: ", typeof(date_num));
console.log("Value of date cast to a Sring: ", date_num);

//Diferent Value into Booleans
console.log("Value of num cast to a Boolean: ", Boolean(num));
console.log("Value of str cast to a Boolean: ", Boolean(str));
console.log("Value of date cast to a Boolean: ", Boolean(date));
console.log("Boolean value of 0: ", Boolean(0));
console.log("Boolen value of empty string: ", Boolean(""));

//Diferent conversion of null
console.log("Value of null cast to a String: ", String(null));
console.log("Value of null cast to a Number: ", Number(null));
console.log("Value of null cast to a Boolean: ", Boolean(null));