// How to reverse a string
var myName = "Jonathan";

const reversed = reverseName(myName);

    function reverseName(personName) {
        let reversed = "";
        for(let i = personName.length - 1; i >= 0; i--) {
            reversed = reversed + personName[i];
        }
        return reversed;
    }   

    // console.log(reversed);

// Determine if a String is a palindrome
let sampleName = "level";

    isPanlindrome(sampleName);

    function isPanlindrome(sampleString) {
        let reversed = "";
        for(let i = sampleString.length - 1; i >= 0; i--) {
            reversed = reversed + sampleString[i];
        }

        if(reversed == sampleString) {
            // console.log(`The string ${sampleString} is a palindrome`);
            return reversed;
        } else {
            // console.log("It is just a regular String")
            return reversed;
        }
    }

// Calculate the number of numerical digits in a String
const randomString = "Abc";

    function checkNum(randString) {
        const numDigits = randString.match(/[0-9]/g);
        return numDigits ? numDigits.length : 0
    }

    // console.log(checkNum(randomString));

// Find the count for the occurrence of a particular character in a string
const sampleStr = "Hello World12345!";

const char = /o./g

const charOccur = new RegExp(char, "g");

    function numOccur(str, char) {
        const occured = str.match(char);
        return occured ? occured.length : 0;
    } 

    // console.log(numOccur(sampleStr, charOccur));

// Find the non-matching characters in a string - not working - exclude pa need
const pattern = /[0-9]/g;

    function exclude(str, pattern) {
        const nonMatch = str.match(pattern);

        if(nonMatch) {
            str = str.replace(pattern, '');
            return str
        } else {
            console.log("No integers found")
        }
    }

    const result = exclude(sampleStr, pattern);
    // console.log(result);

// Find out if the given strings are anagram

// Calculate the number of vowels and consonants in a String
var myName = "rr";

    function checkStr(str) {
        const vowels = /[aeiou]/g;
        const consonant = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;

        if(str.match(vowels) || str.match(consonant)) {
            const vowelCount = str.match(vowels);
            const consonantCount = str.match(consonant);
            return [vowelCount ? "Vowels: " + vowelCount.length : "Vowels: " + 0,
                    consonantCount ? "Consonants: " +  consonantCount.length : "Consonants: " + 0
                ];
        } else {
            console.log("The string is empty")
        }

    }

    // console.log(checkStr(myName));    

// Total of matching integer elements in an array
const numArray = [1, 2, 4, 3, 2, 2, 2, 2, 5];

const numMatch = 5;

    function checkMatch(arrayNum, matchNum) {

        let count = 0;

        for(let i = 0; i <= arrayNum.length - 1; i++) {
            arrayNum[i] == matchNum ? count++ : 0
        }
        return count;
    }

    //console.log(checkMatch(numArray, numMatch));

// Reverse an array
const array1 = ["Table", "Chair", "Glass", "Charger", "Mouse"];

    for(let i = array1.length - 1; i >= 0; i--) {
        //console.log(array1[i]);
    }


// Maximum element in an array
const array2 = [3, 5, 8, 1, 9, 12];

    let maxNum = Math.max(...array2); //spread
    //console.log(maxNum);


// Sort Array of Integers in ASC
//console.log(array2.sort((a, b) => a - b));

// Fibonacci Sequence
const seqLength = 10;

function fibonacciSeq(n) {
    if(n == 0) {
        return [];
    } else if(n == 1) {
        return [0];
    } else if(n == 2) {
        return [0, 1];
    } else {
        const fibSeq = fibonacciSeq(n - 1);
        fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
        return fibSeq
    }
}

    //console.log(fibonacciSeq(seqLength));

// Sum of two integers 
let x = 10;
let y = 20;
let sum = x + y;

    //console.log(sum);

// Average of numbers in a list
    function addAllInt(array) {
        let sum = 0;
        let average = 0;

        for(let i = 0; i <= array.length - 1; i++) {
            sum += array[i];
        }
        average = sum / array.length;
        return [sum, Math.round(average)];
    }

    // console.log(addAllInt(array2));

// Check if integer is odd or even
let z = 11;

    function checkInteger(number) {
        if(number % 2 == 0) {
            console.log(`${number} is an even number`);
        }else {
            console.log(`${number} is an odd number`);
        }
    }

    //checkInteger(z);
    
// Find middle of a linked list
class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(item) {
        const newItem = new Node(item);
        if(!this.head) {
            this.head = newItem;
            return;
        }
        
        let current = this.head; // start
        while(current.next){
            current = current.next;
        }
        current.next = newItem;
    }

    searchMiddle() {
        if(!this.head) {
            return null;
        }

        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.item;
    }

    display() {
        let current = this.head; // start
        while(current) {
            console.log(current.item);
            current = current.next;
        }
    }
}

const linkedArray = [1, 2, 3, 4, 5];

const linkedList = new LinkedList();

    for(let item of linkedArray) {
        linkedList.insert(item);
    }
    console.log(linkedList.searchMiddle());
    linkedList.display();

// Remove loop in a linked list

// merge two sorted linked list 

// Binary Search in a sorted array

// Binary Tree Reversal

