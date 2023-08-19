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
