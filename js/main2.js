const numberOfStones = {
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

const cupNumber = Object.keys(numberOfStones) //get an array of the cupNumber of the object
const myCups = [cupNumber[0], cupNumber[1], cupNumber[2], cupNumber[3], cupNumber[4], cupNumber[5]] // assigns only these cups to player
const computerCups = [cupNumber[12], cupNumber[11], cupNumber[10], cupNumber[9], cupNumber[8], cupNumber[7]]
let previousChoice = 'seven'
//map over each key in the score object
Object.keys(numberOfStones).forEach((id) => {
    const score = numberOfStones[id] //get the value for that id
    const cup = document.getElementById(id) //get the html element for the id
    cup.innerHTML = score //initialize the default
})

myCups.forEach((cup) => {
    const location = document.body.querySelector(`#${cup}`)  //add a click event listener to the element
    location.addEventListener('click', () => {
        runLoop(cup, true) //run the loop for the given id on click
        hideInstructions()
        
        Object.keys(numberOfStones).forEach((cup) => {
            const updatedCup = document.getElementById(cup)
            updatedCup.innerHTML = numberOfStones[cup]
        }) //update each cup to use the current numberOfStones
        
        displayWinner()
        computerChoice = getComputerChoice()
        console.log('computer choice: ', computerChoice)
        runLoop(computerChoice, false)
        // setTimeout(() => runLoop(getComputerChoice()), 2000)
        resetSquareColor(previousChoice)
        changeSquareColor(computerChoice)
        previousChoice = computerChoice

        Object.keys(numberOfStones).forEach((cup) => {
            const updatedCup = document.getElementById(cup)
            updatedCup.innerHTML = numberOfStones[cup]
        })
        
        displayWinner()
        
    })
})

runLoop = (id, isMyTurn) => {
    let currentAmountOfStones = numberOfStones[id] // get score from numberOfStones object by id
    numberOfStones[id] = 0 // reset clicked div to 0, as all stones have been "picked up"
    const index = cupNumber.indexOf(id) //get the index of the current id in the cupNumber array
    for (let i = index + 1; i <= index + currentAmountOfStones; i++) { // loop through array and increment value of index
        const key = cupNumber[i % 14] // %14 to ensure loop will continue to loop infinitely around array
        numberOfStones[key]++;
    } 
    const lastIndex = (index + currentAmountOfStones) % 14

    if (isMyTurn && myCups.includes(cupNumber[lastIndex]) && numberOfStones[cupNumber[lastIndex]] === 1) {
        const stonesToAdd = numberOfStones[cupNumber[12 - lastIndex]]
        numberOfStones[cupNumber[6]] += stonesToAdd + 1// add stones in corresponding index + own cup to store index
        numberOfStones[cupNumber[12 - lastIndex]] = 0 // empty corresponding index
        numberOfStones[cupNumber[lastIndex]] = 0 // empty own cup index
        
    } else if (!isMyTurn && computerCups.includes(cupNumber[index + currentAmountOfStones]) && numberOfStones[cupNumber[index + currentAmountOfStones]] === 1) {
        const stonesToAdd = numberOfStones[cupNumber[12 - lastIndex]]
        numberOfStones[cupNumber[13]] += stonesToAdd + 1// add stones in corresponding index + own cup to store index
        numberOfStones[cupNumber[12 - lastIndex]] = 0 // empty corresponding index
        numberOfStones[cupNumber[lastIndex]] = 0
    }
}

getComputerChoice = () => {
    let availableCups = []
    computerCups.forEach((cup) => {
        if (numberOfStones[cup] != 0) {
            availableCups.push(cup)
        }
    })
    const randomNumber = (Math.floor(Math.random() * availableCups.length))
    const choice = availableCups[randomNumber]
    return choice
}

changeSquareColor = (cup) => {
    const location = document.body.querySelector(`#${cup}`) 
    location.style.border = 'solid red'
    location.style.color = 'red'
}

resetSquareColor = (cup) => {
    const location = document.body.querySelector(`#${cup}`)
    location.style.border = 'solid brown'
    location.style.color = 'brown'
}

isTopRowEmpty = () => {
    if (numberOfStones.seven === 0 && numberOfStones.eight === 0 && 
        numberOfStones.nine === 0 && numberOfStones.ten === 0 && 
        numberOfStones.eleven === 0 && numberOfStones.twelve === 0) {
        return true
    } else {
        return false
    }
}

isBottomRowEmpty = () => {
    if (numberOfStones.one === 0 && numberOfStones.two === 0 && 
        numberOfStones.three === 0 && numberOfStones.four === 0 && 
        numberOfStones.five === 0 && numberOfStones.six === 0) {
        return true 
    } else {
        return false
    }
}

isGameOver = () => {
    if (isTopRowEmpty() === true  || isBottomRowEmpty() === true) {
    return true 
    } else {
        return false
    }
}

whoWon = () => {
    if (numberOfStones.p1 > numberOfStones.cpu) {
        return "You won!"
    } else if (numberOfStones.p1 < numberOfStones.cpu) {
        return "Computer wins"
    } else if (numberOfStones.p1 == numberOfStones.cpu) {
        return "Tie!"
    }
}

displayWinner = () => {
    if (isGameOver() === true && (numberOfStones.p1 > numberOfStones.cpu)) {
        document.querySelector('#player').style.display = 'flex'
    } else if (isGameOver() === true && (numberOfStones.p1 < numberOfStones.cpu)) {
        document.querySelector('#computer').style.display = 'flex'
    }
}

hideInstructions = () => {
    document.querySelector('#h1').style.display = 'none'
}



//BUG: THIS WOULD CAUSE YOUR FUNCTION TO RUN WITHOUT WAITING FOR A USER TO CLICK
//locationOfFirstDiv.addEventListener("click", runLoop()) <-- this will not listen for an event but run immediately: wrong syntax

//Now, it's the next players turn and they can choose where to start, meaning we make use of a event listener that listen for which cup a user selects
//Each cup will have an event listener

//Edge case: How to check what cups a player can pick from:
//Example: Let's say we are the player and our side is the bottom side we need check which cups are valid:
//If statement: "If ((what the user selected with the event listener is === cup[1]) || (what the user selected === cup [2]) || (etc..)"

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

