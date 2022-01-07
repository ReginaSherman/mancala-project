const scoring = {
    one: 4,
    two: 4,
    three: 4,
    four: 4,
    five: 4,
    six: 4,
    p1: 0,
    seven: 4,
    eight: 4,
    nine: 4,
    ten: 4,
    eleven: 4,
    twelve: 4,
    cpu: 0,
}
//If I'm a player and I work with the first index/cup then that should be 0, and distribute to the indexes ahead of it

// console.log(scoring.one)
// map over each key in the score object

Object.keys(scoring).forEach((id) => {
    // get the value for that id
    const score = scoring[id]

    // get the html element for the id
    const cup = document.getElementById(id)
    // initialize the default
    cup.innerHTML = score

    // add a click event listener to the element
    const location = document.body.querySelector(`#${id}`)
    location.addEventListener('click', () => {
        // run the loop for the given id on click
        runLoop(id)
        
        
        // update each cup to use the current scoring
        Object.keys(scoring).forEach((id) => {
            const updatedCup = document.getElementById(id)
            updatedCup.innerHTML = scoring[id]
        }) 
        
    });
})

//If player picks up stones and needs to pass the computer's total cup, we would check if the current iteration is currently on the last index of the array
//example: if the index cups[8 + 4] is the same index as the last item in the array, start back at cup[0] --> use .indexOf() to compare the index

//Grab the first index's value
//Typically this would be done with an event listener that grabs the index by what the user clicks, so each of these cups would have 
//event listeners attached
function runLoop(id) {
    // get score from scoring object by id
    let currentAmountOfStones = scoring[id]
    console.log(currentAmountOfStones)
    // reset clicked div to 0, as all stones have been "picked up"
    scoring[id] = 0

    //get an array of the keys of the object
    const keys = Object.keys(scoring)
    console.log(keys.keys(scoring))

    //get the index of the current id in the keys array
    const index = keys.indexOf(id)
    console.log(keys.indexOf(id))
    // loop through array and increment value of index
    for (let i = index + 1; i <= index + currentAmountOfStones; i++) {
        const key = keys[i % 14] // %14 to ensure loop will continue to loop infinitely around array
        scoring[key]++;
    }
}

function isTopRowEmpty() {
    if (scoring.seven === 0 && scoring.eight === 0 && scoring.nine === 0 && scoring.ten === 0 && scoring.eleven === 0 && scoring.twelve === 0) {
        return true
    } else {
        return false
    }
}

function isBottomRowEmpty() {
    if (scoring.one === 0 && scoring.two === 0 && scoring.three === 0 && scoring.four === 0 && scoring.five === 0 && scoring.six === 0) {
        return true 
    } else {
        return false
    }
}







//^ We would follow this same syntax to setup the event listener for all the other divs

//BUG: THIS WOULD CAUSE YOUR FUNCTION TO RUN WITHOUT WAITING FOR A USER TO CLICK
//locationOfFirstDiv.addEventListener("click", runLoop()) <-- this will not listen for an event but run immediately: wrong syntax

//Now, it's the next players turn and they can choose where to start, meaning we make use of a event listener that listen for which cup a user selects
//Each cup will have an event listener

//Edge case: How to check what cups a player can pick from:
//Example: Let's say we are the player and our side is the bottom side we need check which cups are valid:
//If statement: "If ((what the user selected with the event listener is === cup[1]) || (what the user selected === cup [2]) || (etc..)"

// If ((cups[index] === cups[1]) || (cups[index] === cups[2]) || (cups[index] === cups[3]) || (cups[index] === cups[4]) || (cups[index] === cups[5])) 
// console.log("this works")

// If ((topRow.includes(the div that I click) {
    //allow click and run eventListner
    // } else {
        //do not allow click and show alert "choose from the other row"
        // })
        
        // if (topRow.includes('#one') === true) {
            // }
            // console.log(topRow.includes('#one'))

            
//CODE ORGANIZATION:
//top - to - bottom generally this is the flow. 

//Having a notion constants: values need to be tracked throughout the game, we will initialized/declared at the top of our file
//All our functions and the meat and potatoes of our logic is the middle
//By convention, event listeners are kept at the very bottom of the JS file in the global scope.

//Querying a tag that exists more than once:
//const locationOfFirstDiv = document.body.getElementByTagName("div")[0]




//NEXT STEPS: <-- Overall goal: This will involve setting up event listeners, dom manipulation, and updating the integer value for each div as the loop iterates
//When the game renders for a player, each div/cup should have an event listener waiting for a click. 
  //when the syntax is complete, check that a console log that says "this works!" outputs to the console.

//The next place we can continue from here is working from inside the event listener.
  //Once we can confirm the console log outputs, on the next call to your first function such as runLoop()
  //Actually create this runLoop() function and the necessary code inside
  //use console logs to check the state of the cups array to verify your loop works as intended

//Once runLoop() works, I need to call another function to reset the stones, callback inside runLoop() to resetStones()
  //Create the resetStones() function and the logic for it
  //Check with console log

//Can be stretch goal: Our next goal would be to use dom manipulation to display these values in the browser

//Still need to compare values in cups[0] and cups [13] to see who wins
    //Do I want to have the game end after a certain number of turns, or when one side is empty? 
    //How do I determine when a whole side is empty? 

//Distinguish sides so players can only choose from their side 

//Automate computer player

//Turn indicators

//Keep track of how many are in each store? -- this will happen once I am able to display the array indices on each div 

