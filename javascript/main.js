//dynamic name slicer
let userInput;

document.getElementById("submitData").onclick = function() {
    userInput = document.getElementById("userInput").value

    fName = userInput.slice(0, userInput.indexOf(" "));
    lName = userInput.slice(userInput.indexOf(" ") + 1);

    document.getElementById("name").innerHTML = "Full name: " + userInput;
    document.getElementById("fName").innerHTML = "Your first name: " + fName;
    document.getElementById("lName").innerHTML = "Your last name: " + lName;
}

// 2D Array
const array = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"]
]

let elements = "";

for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
        elements += array[i][j];
    }
    document.getElementById("myArray").innerHTML = elements += "<br>";
}


//Guessing game

const num = Math.floor(Math.random() * 10 + 1);
let tries = 0;
let attempt = 5;

document.getElementById("submitGuess").onclick = function() {
    
    let guess =  document.getElementById("userGuess").value
    tries++;
    attempt--;

    if(guess == num && !(attempt == 0)) {
        alert(`${guess} is correct. You guessed the number!`);
    } else if(guess < num && !(attempt == 0)) {
        alert(`${guess} is too low!`);
    } else if(guess > num && !(attempt == 0)) {
        alert(`${guess} is too high!`);
    } else {
        alert(`You lose! ${attempt} remaining attempts.`);
    }
}

// Callback

fullName("Jonathan", "Robles", displayName);

function fullName(fname, lname, output) {
    let fullName = fname + lname;
    displayName(fullName);
}

function displayName(fullName) {
    console.log(fullName);
}

// For each - executes a provided  callback function once for each  array element

//Capitilize the first letter of the elements in an array
// print all

const foods = ["rice", "adobo", "kare-kare"];

for(let i = 0; i <= foods.length - 1; i++) {
    let food = foods[i];
    console.log(food)
}

foods.forEach(function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
});
foods.forEach(function display(element) {
    console.log(element);
});


  
