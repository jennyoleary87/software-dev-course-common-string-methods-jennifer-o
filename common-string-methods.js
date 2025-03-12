/*
03/12/2025
software-dev-course-common-string-methods-jennifer-o
Assignment: Practice: Stringing Characters Together: String Methods

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.
*/

let textFun = "Learning JavaScript is fun!";
console.log(textFun.includes("JavaScript")) // output: true
console.log(textFun.indexOf("fun")) // output: 23

/*
Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.
*/

let textTransform = " CODE BOOTCAMP ";
let newTextTransform = textTransform.toLowerCase().trim().replace('bootcamp', 'JavaScript');
console.log(newTextTransform) // output: code JavaScript


/*
Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.
*/

let textBreaking = "Coding is fun and educational";
let newTextBreaking = textBreaking.split(" "); // splits at spaces into array of words
console.log(newTextBreaking) // output: [ 'Coding', 'is', 'fun', 'and', 'educational' ]

/*
Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.
*/

let textRetrieve = "Bootcamp";
let textRetrieveSliced = textRetrieve.slice(4, 8);
console.log(textRetrieve.charAt(0) + textRetrieveSliced) // first index is zero + sliced camp - output: Bcamp

let hLine = "-------------------------------";
console.log(hLine) // line to help visually separate Problem answers

/*
Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").
*/

let inputOrder = `Customer: John Doe Order: Apple, Banana, Grape Total: $20.50`;
let customerName = inputOrder.slice(10, 18);
let orderArray = inputOrder.split(" ");
let totalPrice = inputOrder.slice(inputOrder.indexOf("Total: $20.50")).toUpperCase();
console.log({
  customerName,
  orderArray,
  totalPrice
});

/*
-- OUTPUT --
{
  customerName: 'John Doe',
  orderArray: [
    'Customer:',
    'John',
    'Doe\nOrder:',
    'Apple,',
    'Banana,',
    'Grape\nTotal:',
    '$20.50'
  ],
  totalPrice: 'TOTAL: $20.50'
}
*/

console.log(hLine) // line to help visually separate Problem answers

/*
Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.
*/

//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

let hasJavaScript = inputString.includes("JavaScript"); // output: true
let codingPosition = inputString.indexOf("Coding"); // output: Coding at 17
let startsWithWelcome = inputString.startsWith("Welcome"); // output: false - because spaces beforehand
let endsWithToday = inputString.endsWith("today."); // output: false - because spaces on end

/*
2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.
*/

let lowercaseString = inputString.toLowerCase(); // output:   welcome to the coding bootcamp! learn javascript today.  
let uppercaseString = inputString.toUpperCase(); // output:   WELCOME TO THE CODING BOOTCAMP! LEARN JAVASCRIPT TODAY.  
let trimmedString = inputString.trim(); // output: Welcome to the Coding Bootcamp! Learn JavaScript today.
let replacedString = inputString.replace("JavaScript", "coding"); // output:   Welcome to the Coding Bootcamp! Learn coding today.  

/*
3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.
*/

let wordsArray = inputString.split(" ");

/*
4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/

let firstCharacter = trimmedString.charAt(0); // output: W
let extractedBootcamp = inputString.slice(24, 32); // output: Bootcamp

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});

