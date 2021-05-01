/*VARIABLES - Variable is a placeholder that allows you to store values. Like a box where you can store values of different data types*/

var firstname = "Efuah Faler";
var age = 31;
var hasDriverLicense = true;
var empty = undefined;

console.log (firstname + " type =" + typeof firstname);
console.log (age + " type =" + typeof age);
console.log ( hasDriverLicense+ " type =" + typeof hasDriverLicense);
console.log (empty+ " type =" + typeof undefined);
 
/*OBJECTS*/

// object is a collection of grouped variables

var person = {
    name: "Efuah Faler",
    age: 31,
    hasDriversLicense: true,
    address: {
        firstLine: "123",
        postcode: "ec1",
        country: "England"

    }
};

console.log(person); /*should return  object, Object*/

console.log(JSON.stringify(person)); /*actually gets this persons details*/

console.log(person.name);

console.log(Object.values(person));

console.log(person.address);

/* ARRAYS */
var name = "Alex";
var names = ["Alex", "Maria", "Sam"];  /*variable names has 3 values with data type string: best practise to keep it the same*/  
console.log(names);

console.log(names[2]);
console.log(names.length);

/*LOOPING THROUGH ARRAYS*/

for (var n of names) {    /*for every name which i'll call n, I want to console log n*/
    console.log(n);       
}

names.forEach(function(n, index) {
    console.log (index + " - " + n);
})

/* ARITHEMETIC OPERATIONS */

// + - / % *

var addition = 2 + 2;
var subtraction = 3 - 90;
var division = 10 / 5;
var multiplication = 3 * 30;
var remainder = 5 % 2;


console.log(addition, subtraction, division, multiplication, remainder);


/* FUNCTIONS - is a procedure that allows you to perform a task or calculate a value */

var addition = (3 + 2);
console.log(addition);  // if i want to customise this, I shoudl use a function as below. Inside parentheses, we need to add arguments.


function addNumbers( n1, n2 ) {
    // start function body 
    // define logic
    //3 + 2
    console.log((n1 + n2)/2)
    // end function body 
}

addNumbers(10, 20);

// this function doesnt return a value, it simply logs the result.The following created a value;

function addNumbers( n1, n2 ) {
    // start function body 
    // define logic
    //3 + 2
    var result = ((n1 + n2)/2)
    return result;
    // end function body 
}

var result =addNumbers(10, 20);
console.log(result);

//you don't have to creat your own functions as above, there a bunch of them available online

/* LOOPS */

var person = [   //arrat of objects
    {name: "Alex", age: 22},
    {name: "Maria", age: 30}
]

for (var i = 0; i < person.length; i++) {
    console.log(person[i].name);
    console.log(person[i].age);
    console.log("--------");

}


var number  = 0;
while (number < 5){
    console.log(number);
    number++;
}

var i = 0 ;

do {
   i ++;
   console.log(i)
} while (i < 5)

/* BREAK AND CONTINE - can be used to break out of a loop anf continue one*/

var number  = 0;
while (number < 5){
    console.log(number);
    if(number == 2) {
        break;
    }
    number++;
}

var number  = 0;
while (number < 5){
    number ++;

    if(number < 5) {
        continue;
    }
    number++;      //should print 5
}



/*IF STATEMENT -allows us to execute a block of code if a specified condition is true*/

var bool = false;

if (bool)  {
 console.log("bool variable was true")
} else {
    console.log("bool variable was false")
}  //prints "bool variable was false"


var person = {
    name: "Anna",
    age: 18
}

if (person.age >= 18) {
    console.log(person.name + " is an adult");
} else if (person.age === 1p) {
    console.log(person.name + " is about to be an adult");
} else {
    console.log(person.name + " is not an adult")

}


/*SWITCH*/
switch(true) {
case (person.name == 17):
    console.log(person.name + " is about to be an adult");
    break;
case (person.name >= 18):
    console.log(person.name + " is an adult");
    break;
default:
    console.log("is not an adult")

};

/* GLOBAL AND LOCAL SCOPE - variables stored in the root of the file are global */
//if you were to only use global scope, it would take up a lot of space on the commputer and you also wouldnt be able to use the same variable names

var number = 10;

function calc {
 return number;
}

console.log(number) //will return number since it's in the global scope
console.log(calc)


function calc {
 var number = 10;
 return number;
}

console.log(number) //will not return number since number is now in the function scope


//THIS: is the object that is executing the current function