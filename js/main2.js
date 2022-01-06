let cups = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
//If I'm a player and I work with the first index/cup then that should be 0, and distribute to the indexes ahead of it

//WHAT NEEDS TO BE TRACKED DURING EACH PLAY:
//If player picks up stones and needs to pass the computer's total cup, we would check if the current iteration is currently on the last index of the array
//example: if the index cups[8 + 4] is the same index as the last item in the array, start back at cup[0] --> use .indexOf() to compare the index

//Grab the first index's value
//Typically this would be done with an event listener that grabs the index by what the user clicks, so each of these cups would have 
//event listeners attached
//But for speed and testing purposes, we can specify the cup we want to work with
// currentAmountOfStones = cups[0]

//THIS WOULD BE AT LEAST ONE PART OF A FUNCTION
function runLoop(index) {
    let currentAmountOfStones = cups[index]
    cups[index] = 0
    for(let i = index + 1; i <= index + currentAmountOfStones; i++) {
    // cups[i] = cups[i] + 1
    cups[i%12]++
}
}


//  console.log(cups) //--> This completes a players round and reflects the current state of the board

//-----EVENT LISTENERS HERE AT THE BOTTOM-----
//Grab the div
const locationOfFirstDiv = document.body.querySelector('#one')
// console.log(locationOfFirstDiv)
locationOfFirstDiv.addEventListener('click', () => {
    runLoop(0) // <--- this would work! :) 
  console.log(cups)
  //Here is where would run relevant functions
  //or simply have our tasks within here.. depends on how large your logic becomes.
})

const locationOfSecondDiv = document.body.querySelector('#two')
locationOfSecondDiv.addEventListener('click', () => {
    runLoop(1)
    console.log(cups)
})
    
const locationOfThirdDiv = document.body.querySelector('#three')
locationOfThirdDiv.addEventListener('click', () => {
    runLoop(2)
    console.log(cups)
    
})
const locationOfFourthDiv = document.body.querySelector('#four')
locationOfFourthDiv.addEventListener('click', () => {
    runLoop(3)
    console.log(cups)
})
const locationOfFifthDiv = document.body.querySelector('#five')
locationOfFifthDiv.addEventListener('click', () => {
    runLoop(4)
    console.log(cups)
})
    
const locationOfSixDiv = document.body.querySelector('#six')
locationOfSixDiv.addEventListener('click', () => {
    runLoop(5)
    console.log(cups)
    
})
const locationOfSeventhDiv = document.body.querySelector('#seven')
locationOfSeventhDiv.addEventListener('click', () => {
    runLoop(6)
    console.log(cups)
})
const locationOfEighthDiv = document.body.querySelector('#eight')
locationOfEighthDiv.addEventListener('click', () => {
    runLoop(7)
    console.log(cups)
})
    
const locationOfNinthDiv = document.body.querySelector('#nine')
locationOfNinthDiv.addEventListener('click', () => {
    runLoop(8)
    console.log(cups)
    
})
const locationOfTenthDiv = document.body.querySelector('#ten')
locationOfTenthDiv.addEventListener('click', () => {
    runLoop(9)
    console.log(cups)
})

const locationOfEleventhDiv = document.body.querySelector('#eleven')
locationOfEleventhDiv.addEventListener('click', () => {
    runLoop(10)
    console.log(cups)
    
})
const locationOfTwelfthDiv = document.body.querySelector('#twelve')
locationOfTwelfthDiv.addEventListener('click', () => {
    runLoop(11)
    console.log(cups)
})
//^ We would follow this same syntax to setup the event listener for all the other divs

//BUG: THIS WOULD CAUSE YOUR FUNCTION TO RUN WITHOUT WAITING FOR A USER TO CLICK
//locationOfFirstDiv.addEventListener("click", runLoop()) <-- this will not listen for an event but run immediately: wrong syntax

//Now, it's the next players turn and they can choose where to start, meaning we make use of a event listener that listen for which cup a user selects
//Each cup will have an event listener

//Edge case: How to check what cups a player can pick from:
//Example: Let's say we are the player and our side is the bottom side we need check which cups are valid:
//If statement: "If ((what the user selected with the event listener is === cup[1]) || (what the user selected === cup [2]) || (etc..)"


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

