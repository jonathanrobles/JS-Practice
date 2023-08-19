let userInput;

document.getElementById("submitData").onclick = function() {
    userInput = document.getElementById("userInput").value
    document.getElementById("demo").innerHTML = userInput;
}

