//Data in javascript

let time = new Date();
console.log("Current time: \n", time);

//Creating date object for specific date and time
time = new Date(2022, 07, 11, 8, 51, 30);
console.log("Year, Month, Day, hour, min, sec: \n", time);

//Using String date format
time = new Date("July 11, 2022");
console.log("Initialized with date string: \n", time);

//Using the ISO standard for a date
time = new Date("07-11-2022");
console.log("Initialized with (mm-dd-yyyy): \n", time);

//Using some date functions
console.log("My timezone offset in minutes: ", time.getTimezoneOffset());
console.log("The UTC time is: ", time.toUTCString())

