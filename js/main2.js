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
        runLoop(computerChoice, false)
        
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

displayWinner = () => {
    if (isGameOver() === true && (numberOfStones.p1 > numberOfStones.cpu)) {
        document.querySelector('#player').style.display = 'flex'
    } else if (isGameOver() === true && (numberOfStones.p1 < numberOfStones.cpu)) {
        document.querySelector('#computer').style.display = 'flex'
    } else if (isGameOver() === true && (numberOfStones.p1 === numberOfStones.cpu)) {
        document.querySelector('#tie').style.display = 'flex'
    }
}

hideInstructions = () => {
    document.querySelector('#h1').style.display = 'none'
}
