const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

// Created a node object
const toDom = document.createDocumentFragment();

//This selects the planets ID on the index file.
const planetEl = document.getElementById("planets")

//Created a function to create a list tag, then li.textContent to write to the DOM.
const writeToDom = (solarPlanets) => {
        const li = document.createElement("li");
        li.textContent = solarPlanets;
        toDom.appendChild(li);

    }
    //This runs through each item in the array.
planets.forEach(writeToDom);



//This appends the get element by ID to the document fragment.
planetEl.appendChild(toDom);





/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]