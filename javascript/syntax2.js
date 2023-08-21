//OOP
//Constructor Function
function Person(firstName, lastName, bt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bt = bt;

    this.getFullName = () => {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

//class -class always start with cap letter
class Person1 {
    constructor(firstName, lastName, bt) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bt = bt;
    }

    getFullName() {
        return `My name is ${this.firstName} ${this.lastName}`;
    }
}

//instantiate object
const person1 = new Person("Jonathan", "Robles", "A");
console.log(person1.getFullName());

const person2 = new Person1("Jonathan", "Robles", "A");
console.log(person2.getFullName());

//-------------------------------------------------------------------------------

//DOM Selection -Document Object Model
//const form = document.getElementById("id");
    //or
//const form1 = document.querySelector("#id/.class");
    //to target multiple elements
//const form2 = document.querySelectorAll("id/class");

//DOM Manipulation
//.firstElementChild.textContent = ""; target first child
//.children[0].innerText = ""; target middle child
//.lastElementChild.innerHTML = "<h1></h1>"; target last child with HTML manipulation

//events
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log("Button has been clicked!");
// });

//----------------------------------------------------------------------------------------------

//Form Validation
// const userName = document.querySelector("#id");
// const password = document.querySelector("#id");

// btn.addEventListener("click", function(e) {
//     e.preventDefault();

//     if(userName.value.length === 0 || password.value.length === 0) {
//         console.log("Enter usename & password");
//     } else {
//         console.log("Thank you!");
//          form.submit();
//     }
// }); 

//timeout function
//setTimeout(() => document.querySelector(".error").remove(), 3000); need two param (function, millisecond)

// Ternary Operator
    // condition ? expIfTrue : expIfFalse