const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;


let guessesArray = [];


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min};

let randomNumber = getRandomInteger(1, 3);


// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));



// GET & POST Routes go here
app.get('/guesses', (req, res) => {
  res.send(guessesArray);
  
})



app.post('/guesses', (req, res) => {
  let newGuess = req.body;
  console.log("Adding a new guess", newGuess);
  checkGuesses(newGuess);
  guessesArray.push(newGuess);
  console.log(guessesArray);
    
  res.sendStatus(201);
})





app.post('/reset', (req, res) => {
  guessesArray = [];

})


function checkGuesses(newGuess) {
  
    if ( newGuess.playerOne < randomNumber){
    newGuess.playerOne = `${newGuess.playerOne} is too low!`;
    console.log(newGuess.playerOne, randomNumber);
  }
  else if ( newGuess.playerOne > randomNumber){
    newGuess.playerOne = `${newGuess.playerOne} is too high!`;
  } else {
    newGuess.playerOne = `${newGuess.playerOne} is CORRECT `
  }


    if (newGuess.playerTwo < randomNumber) {
    newGuess.playerTwo = `${newGuess.playerTwo} is too low!`;
    console.log(newGuess.playerOne, randomNumber);
  }
  else if (newGuess.playerTwo > randomNumber) {
    newGuess.playerTwo = `${newGuess.playerTwo} is too high!`;
  } else {
    newGuess.playerTwo = `${newGuess.playerTwo} is CORRECT `
  }

  if (newGuess.playerThree < randomNumber) {
    newGuess.playerThree = `${newGuess.playerThree} is too low!`;
    console.log(newGuess.playerOne, randomNumber);
  }
  else if (newGuess.playerThree > randomNumber) {
    newGuess.playerThree = `${newGuess.playerThree} is too high!`;
  } else {
    newGuess.playerThree = `${newGuess.playerThree} is CORRECT `
  }

  if (newGuess.playerFour < randomNumber) {
    newGuess.playerFour = `${newGuess.playerFour} is too low!`;
    console.log(newGuess.playerOne, randomNumber);
  }
  else if (newGuess.playerFour > randomNumber) {
    newGuess.playerFour = `${newGuess.playerFour} is too high!`;
  } else {
    newGuess.playerFour = `${newGuess.playerFour} is CORRECT `
  }


}

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

