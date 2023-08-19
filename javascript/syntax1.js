//Visit MDN Console for full documentation for console
    //Alert Function
        //alert("Hello World");
    //Display in Console at Developer Tools
    console.log("Hello World");
    //Warning
        console.warn("Hello Warning!");
    //Error
        console.error("Hello Error!");

//---------------------------------------------------------

//JS Variables
    //var
    var fname = "Jonathan";
    var fname = "Athan";
    console.log(fname);
    //using var to declare a variable twice will update to the last declaration

    //let
    let lname = "Robles";
    //let lname = "Angeles";
    console.log(lname);
    //using let to declare a variable twice will cause an error

    //constant
    const mname = "Angeles";
    console.log(mname);

//----------------------------------------------------------

//Data Types
//String, Numbers, Boolean, null, undefined

    const fullName = "JonathanRobles";
    const age = 22;
    const gwa = 1.34;
    const isGraduated = false;
    const lifeSpan = null;
    const unknown = undefined;
//display type of the data
    console.log(typeof fullName);

//String Interpolation
    let String = "My name is " + fullName + " and my age is " + age;
    console.log(String);

    //Template String, use backticks
    let String1 = `My name is ${fullName} and my age is ${age}`
    console.log(String1);
    //get lenght of a String
    console.log(String1.length);
    //LowerCase
    console.log(lname.toLocaleLowerCase(lname));
    //UpperCase
    console.log(lname.toLocaleUpperCase(lname));

//---------------------------------------------------------------
//Arrays
    const Animals = ["Cat", "Dog", "Monkey"];
    //Add item in the Array
        Animals[3] = "Frogs"; 
    //or
        Animals.push("Lion"); 
    //or place at the start
        Animals.unshift("Eagle");
    //remove last item
        //Animals.pop();

    //Display All
    console.log(Animals);
    //Display with Index
    console.log(Animals[0]);
    
    //Determine if variable is Array
    console.log(Array.isArray(Animals));
    //Determine index of item
    console.log(Animals.indexOf("Cat"));
    Animals.splice(1,3); //remove item (start,number of items)
    console.log(Animals);   

//Advanced Concepts
//Object Literals
    //This is an object
    const person = {
        fName: 'Jonathan',
        lName: 'Robles',
        age: 35,
        favorites: ['banana', 'black', 'Twice'],
        familyMembers: {
            father: 'Aries',
            mother: 'Ester',
            sister: 'Jessica'
        }
    }

    console.log(person);

//Array with Objects
    const contacts = [
        {
            id: 1,
            fullName: 'Ester Robles',
            isSaved: 'Phone'
        },
        {
            id: 2,
            fullName: 'Jessica Robles',
            isSaved: 'SD'
        }
    ];
    console.log(contacts[0].fullName);

//---------------------------------------------------------------
//For Loops and While Loops

    //For
    for(let i = 0; i <= 10; i++) {
        //console.log(i);
    }

    //While
    let i = 0;
    while(i <= 10) {
        console.log(`Loop ${i}`);
        i++;
    }

    //foreach
    contacts.forEach(function(contact){
        console.log(contact.fullName);
    });

    //Optimize Way of looping an Array //for of
    for(let contact of contacts) {
        console.log(contact.fullName);
    }
//-------------------------------------------------------------

//Array Maps and Filters -loop-
    //Map
    const contactsFullName = contacts.map(function(contact){
        return contact.fullName;
    })

    console.log(contactsFullName);

    //Filter
    const contactsPhone = contacts.filter(function(contact){
        return contact.isSaved == 'Phone';
    })

    console.log(contactsPhone);

//API only accepts JSON
    //JSON - JavaScript Object Notation
    //This is a JSON
    const contactsJSON = JSON.stringify(contacts);
    console.log(contactsJSON);

//---------------------------------------------------------------------
//Conditionals
    const x = 200;

    if(x == 100) {
        console.log("It's 100");
    } else if(x > 100) {
        console.log(`${x} is greater than 100`);
    } else {
        console.log("not 100");
    }

    //Logic Operators
    // &&, ||, !

    //Comparison Operators
    // ==, ===, <, >, <=, >=, !=, !==

//----------------------------------------------------------------------
//Function Types
    //Old Way of declaring a function
    function getSum(a, b) {
        return a + b;
    }

    console.log(getSum(100, 200));

    //ES6 Method arrow function
    const getProd = (c, d) => {
        return c * d;
    };

    console.log(getProd(100, 200));

// Using "This"
    const letterKey = {
        keys: ['a', 'b', 'c'],
        showKey() {
            this.keys.forEach(function(key) {
                console.log(this, key);
            }, this);
        }
    }

    letterKey.showKey();