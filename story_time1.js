// TODO: Create 4-String variables to introduce develop your story.
// YOUR CODE GOES HERE
multistring = ['the ','open ','sky ','blue ']

// TODO: Create 3-String variables to set the time period of your story or discuss other number elements.
// YOUR CODE GOES HERE
multistring2 = ['blue ','clean ','ocean ','air ']

// TODO: Create 1-Array variable to show a collection of items your character might have.
// YOUR CODE GOES HERE
items = ['shiny ','blue ','old ','pickaxe ']

// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
// YOUR CODE GOES HERE
isSunny = true

// TODO: Print your story to the console.
// YOUR CODE GOES HERE
function createSentence() {
    for (let i = 0; i < items.length; i++) {
        sentence += items[i]
    }
    return sentence
}
function createSentence2() {
    for (let i = 0; i < multistring.length; i++) {
        sentence2 += multistring[i]
    }
    return sentence2
}
function createSentence3() {
    for (let i = 0; i < multistring2.length; i++) {
        sentence3 += multistring2[i]
    }
    return sentence3
}
console.log(createSentence2 + "with the " + createSentence3 + "as i swing my " + createSentence + "around as i explore this amazing world")