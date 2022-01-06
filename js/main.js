/*----- constants -----*/

// Defining the cups and stones
const cups = document.querySelectorAll('.cup')
const stones = document.querySelectorAll('.stone')

// Distinguishing the individual cups
const squareOne = document.querySelector('#cup1')
const squareTwo = document.querySelector('#cup2')
const squareThree = document.querySelector('#cup3')
const squareFour = document.querySelector('#cup4')
const squareFive = document.querySelector('#cup5')

// Assigning specific stones to cups
const cupOne = document.querySelectorAll('.one')
const cupTwo = document.querySelectorAll('.two')
const cupThree = document.querySelectorAll('.three')
const cupFour = document.querySelectorAll('.four')

// Creating arrays to be able to move stones from cup to cup
const cupOneStones = Array.from(cupOne)
let stonesInHand = []
const cupTwoStones = Array.from(cupTwo)
const cupThreeStones = Array.from(cupThree)
const cupFourStones = Array.from(cupFour)
const cupFiveStones = []

const firstCup = document.querySelector('#cup1')
const secondCup = document.querySelector('#cup2') 
const thirdCup = document.querySelector('#cup3')
const fourthCup = document.querySelector('#cup4')
const fifthCup = document.querySelector('#cup5')
/*----- app's state (variables) ----*/


/*----- cached element references -----*/


/*----- event listeners -----*/
squareOne.addEventListener('click', pickUp) // On click, this "picks up" the stones and places them in hand.
firstCup.addEventListener('click', hideDivs) // This is the visual of "picking up" the stones.

secondCup.addEventListener('click', dropStoneTwo) // Add one stone to cup 
secondCup.addEventListener('click', showDiv) // Visual 

thirdCup.addEventListener('click', dropStoneThree)

fourthCup.addEventListener('click', dropStoneFour)

// fifthCup.addEventListener('click', dropStoneFive)


/*----- functions -----*/
//Function to take array and push to new array, respresenting "picking up" stones.
function pickUp() {
    stonesInHand.push(cupOneStones.splice(0,4))
    console.log(stonesInHand.length)
    // cupOneStones.splice(0,4)
    // console.log('clicked!')
}


//Function to remove stones in circle upon click.
function hideDivs() {
    document.querySelector('#one').style.display = 'none';
    document.querySelector('#two').style.display = 'none';
    document.querySelector('#three').style.display = 'none';
    document.querySelector('#four').style.display = 'none';
   
}

function dropStoneTwo() {
    cupTwoStones.push(stonesInHand.splice(0))
    console.log(cupTwoStones.length)
}

function dropStoneThree() {
    cupThreeStones.push(stonesInHand.splice(0))
    console.log(cupThreeStones.length)
}

function dropStoneFour() {
    cupFourStones.push(stonesInHand.splice(0))
    console.log(cupFourStones.length)
}

function dropStoneFive() {
    cupFiveStones.push(stonesInHand.splice(0))
    console.log(cupFiveStones.length)
}
function showDiv() {
    squareTwo.appendChild(document.querySelector('#one'))
    document.querySelector('#one').style.display = 'inline-flex';
    document.querySelector('#one').style.top = 0;
}


// cupOneStones.splice(0,4)
// console.log(stonesInHand)

// console.log(cupOneStones)
// console.log(cups)
// console.log(stones)
// console.log(squareOne)
// console.log(cupFour)
// console.log(pickUp())
