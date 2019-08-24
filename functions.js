const fancyFunction = (something) => {
    return something + 'fancy';

}

const output = fancyFunction('micahel is ');
console.log(output);

firstName = "Geroge";
lastName = "Weasley";

console.log (`${firstName} ${lastName}`)


firstName = "Bill";
lastName = "Weasley";

console.log (`${firstName} ${lastName}`)


firstName = "Ginny";
lastName = "Weasley";

console.log (`${firstName} ${lastName}`)

//es6
const sayMyName = (first, last) => {
    // do something
    return ` ${first} ${last}`
}

// //es5
// const sayMyName = function (first, last) => {
//     // do something
//     console.log(` ${first} ${last}`)
// }

console.log(sayMyName('Emilee', 'Mitchell'));

//Nugget Time

const nuggetizer = (animal) => {
    return `nugget ${animal}`;
}

const humaneNuggetizer = (animal) => {
    return animal;
}

const spamFactory = (litterallyAnything) => {
    return 'spam (lunch)';
}

console.log (nuggetizer('chicken'));
console.log (nuggetizer('octopus'));
console.log (nuggetizer('john wark'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('john wark'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('john wark'));

//A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. 
//To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order 
//in which the bands will perform.

//Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and display that number, and the band name concatenated together to the DOM.

const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint;
}

let bandNumber = 1

const takeNumber =  (bandName) => {

  /*
    Write your awesome code here. See comments
    below for what should be returned.
  */
printToDOM(`<h3>${bandNumber}) ${bandName}</h3>`); // you should already have this function written from the class lecture
bandNumber ++
};

takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM



//printToDOM('Callan');