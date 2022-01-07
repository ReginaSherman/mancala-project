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

// console.log(allCups)

// if (parseInt(playerStore.innerHTML) > parseInt(computerStore.innerHTML)) {
//     console.log("you won!")
// }


// let gameStart = document.body.querySelectorAll(".cup").innerHTML = cups;
// console.log(gameStart)

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
        cups[i%14]++
    }
}

// function updateCount(div) {
    //     for(let i = div; i <= allCups.length; i++) {
        //     div.innerHTML = [i];
//     }
// }

//  console.log(cups) //--> This completes a players round and reflects the current state of the board

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
            
            
 //-----EVENT LISTENERS HERE AT THE BOTTOM-----
//Grab the div

// document.querySelectorAll('.cup').forEach(square => {
//     square.addEventListener('click', () => {
//         cupOne.innerHTML = cups[1]++
//     })
// })

// for (let i = 0; i < cups.length; i++) {
//     const iterator = cups.values();
//     for (const value of iterator) {
//         console.log(value);
//     }
// }


// const sumArray = cups.map()

// for (let i = 0; i < cups.length; i++){
//     let sum = cups.values();
//     console.log(sum)
// // }

let sum = 0
document.querySelectorAll('.cup').forEach(square => {
    square.addEventListener('click', () => { 
       sum += parseInt(square.dataset.stones) 
       console.log(sum)
        for(let i = parseInt(square.dataset.id) - 1; i < allCups.length; i++) {
            if(sum >= 0) {
                square.innerHTML = 0
                allCups[i%14].innerHTML = parseInt(allCups[i%14].innerHTML) + 1
                allCups[i%14].dataset.stones = parseInt(allCups[i%14].innerHTML) + 1
                sum -= 1
            }
        }
        
    })
})

const locationOfFirstDiv = document.body.querySelector('#one')
cupOne.innerHTML = cups[1]
// console.log(locationOfFirstDiv)
locationOfFirstDiv.addEventListener('click', () => {
    runLoop(1) // <--- this would work! :) 
    // cupOne.innerHTML = cups[1]
    console.log(cups)
    //Here is where would run relevant functions
    //or simply have our tasks within here.. depends on how large your logic becomes.
})
            
const locationOfSecondDiv = document.body.querySelector('#two')
cupTwo.innerHTML = cups[2]
locationOfSecondDiv.addEventListener('click', () => {
    runLoop(2)
    // cupTwo.innerHTML = cups[2]
    console.log(cups)
})
    
const locationOfThirdDiv = document.body.querySelector('#three')
cupThree.innerHTML = cups[3]
locationOfThirdDiv.addEventListener('click', () => {
    runLoop(3)
    console.log(cups)
})

const locationOfFourthDiv = document.body.querySelector('#four')
cupFour.innerHTML = cups[4]
locationOfFourthDiv.addEventListener('click', () => {
    runLoop(4)
    console.log(cups)
})

const locationOfFifthDiv = document.body.querySelector('#five')
cupFive.innerHTML = cups[5]
locationOfFifthDiv.addEventListener('click', () => {
    runLoop(5)
    console.log(cups)
})
    
const locationOfSixDiv = document.body.querySelector('#six')
cupSix.innerHTML = cups[6]
locationOfSixDiv.addEventListener('click', () => {
    runLoop(6)
    console.log(cups)  
})

const locationOfSeventhDiv = document.body.querySelector('#seven')
cupSeven.innerHTML = cups[7]
locationOfSeventhDiv.addEventListener('click', () => {
    runLoop(7)
    console.log(cups)
})

const locationOfEighthDiv = document.body.querySelector('#eight')
cupEight.innerHTML = cups[8]
locationOfEighthDiv.addEventListener('click', () => {
    runLoop(8)
    console.log(cups)
})
    
const locationOfNinthDiv = document.body.querySelector('#nine')
cupNine.innerHTML = cups[9]
locationOfNinthDiv.addEventListener('click', () => {
    runLoop(9)
    console.log(cups)   
})

const locationOfTenthDiv = document.body.querySelector('#ten')
cupTen.innerHTML = cups[9]
locationOfTenthDiv.addEventListener('click', () => {
    runLoop(10)
    console.log(cups)
})

const locationOfEleventhDiv = document.body.querySelector('#eleven')
cupEleven.innerHTML = cups[10]
locationOfEleventhDiv.addEventListener('click', () => {
    runLoop(11)
    console.log(cups)    
})

const locationOfTwelfthDiv = document.body.querySelector('#twelve')
cupTwelve.innerHTML = cups[11]
locationOfTwelfthDiv.addEventListener('click', () => {
    runLoop(12)
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

//Still need to compare values in cups[0] and cups [13] to see who wins
    //Do I want to have the game end after a certain number of turns, or when one side is empty? 
    //How do I determine when a whole side is empty? 

//Distinguish sides so players can only choose from their side 

//Automate computer player

//Turn indicators

//Keep track of how many are in each store? -- this will happen once I am able to display the array indices on each div 

