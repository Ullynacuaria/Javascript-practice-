//Define Strings "" or ''
let str_double_quotes = "JavaScript";
let str_single_quotes = 'programing language'

console.log("Welcome to " + str_double_quotes);
console.log("Its is a " + str_single_quotes);

//Define strings using back ticks ``
let str_back_ticks = `Is ${str_double_quotes} a ${str_single_quotes}?`
console.log("String with back ticks: ", str_back_ticks);

let sum = `${1+2+3}`
console.log(`the expression evalueted to a value of ${sum}.`)

//Insert "" in a sentence
let sentence = "I \"love\" you"
console.log("String defined with scape characters: ", sentence)

//Defining multiline string
let multiline_str = 
`                   This is a
                    string wich
                    spans multiple lines`;

console.log("A multi-line string: \n", multiline_str)

//2 diferent ways to define strings and check if one string is equal to another
let name_str1 = "Ully";
let name_str2 = "Ully"
let name_obj1 = new String("Ully");
let name_obj2 = new String("Ully");

console.log("Type of name_str1: ", typeof name_str1);
console.log("Type of name_obj1: ", typeof name_obj1);

//comparisons unisg == (Equality)
console.log("Is name_str1 == name_str2? ", name_str1 == name_str2);
console.log("Is name_str1 == name_obj1? ", name_str1 == name_obj1);
console.log("Is name_str1 == name_obj2? ", name_obj1 == name_obj2);
console.log("Is the valueOf name_obj1 double equal to valueOf name_obj2", name_obj1.valueOf() == name_obj2.valueOf());

//Comparision using === (strict Equality)
console.log("Is name_str1 === name_str2? ", name_str1 === name_str2);
console.log("Is name_str1 === name_obj1? ", name_str1 === name_obj1);
console.log("Is name_str1 === name_obj2? ", name_obj1 === name_obj2);
console.log("Is the valueOf name_obj1 double equal to valueOf name_obj2", name_obj1.valueOf() === name_obj2.valueOf());

// Strings and concatenation
let empName = "Jane Chang";

//the lenght of the string
console.log("Number of characters in empName is: " + empName.length);

//The index of the string
console.log("Index of h is: " + empName.indexOf("h"));

//Using search
console.log("'Ch' occurs at position: " + empName.search("Ch"));

//Using slice
let line = "Fundamentals of JavaScript";

console.log("Original line: ", line);
console.log("Slice (1, 12): ", line.slice(1, 12));
console.log("Slice (-23, -15): ", line.slice(-23, -15));
console.log("Slice (13): ", line.slice(13));

//Using replace
console.log("Replacing'JavaScript' with 'Web Programming'", line.replace("JavaScript", "Web Programming"));
//Case Sensitive to Insesitive
console.log("Replacing'javascript/i' with 'Python'",line.replace(/javascript/i, "Phyton"));
//Specified substring
console.log("Default replace of 'a' with 'A': ",line.replace("a", "A"));
//Imply a global replace
console.log("Global replace of 'a' with 'A': ",line.replace(/a/g, "A"));

//Using Split
console.log("Splitting the line on space: ",line.split(" "));
