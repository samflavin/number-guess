$(document).ready(onReady);
console.log('js');

function onReady(){
    console.log('jq');
    $('#submitButton').on('click', handleGuesses);
    $('#reset').on('click', reset);
}

function reset(){
  $.ajax({
      method:'POST',
      url:'/reset'
  });

  $('#playerOutput').empty();
  $('#counter').empty();
  count=0;
  $('#counter').append(`
  Number of Gueses: ${count}`);
}

let count = 0;



function handleGuesses () {
    console.log('sup guesses');
    count++;


    //get input from fields
    let playerOne = $('#guessOne').val();
    let playerTwo = $('#guessTwo').val();
    let playerThree = $('#guessThree').val();
    let playerFour = $('#guessFour').val();
    $.ajax({
        method:'POST',
        url: '/guesses',
        data: {
            playerOne: playerOne,
            playerTwo: playerTwo,
            playerThree: playerThree,
            playerFour: playerFour,
        }
    })
    .then ( function (response) {
        //post add guess was successful
        //clear inputs
        $('#guessOne').val('');
        $('#guessTwo').val('');
        $('#guessThree').val('');
        $('#guessFour').val('');

        displayAllGuesses ();

    })
    .catch( function(error) {
        console.log('shit shit shit');
        alert('shit sshit shit');

    })
    

}
function renderGuesses(guessesArray){
$('#playerOutput').empty();
for (guess of guessesArray){
    $('#playerOutput').append(`
    <li>
    Player One:${guess.playerOne}
    </li>
    <li>
    Player Two:${guess.playerTwo}
    </li>
    <li>
    Player Three:${guess.playerThree}
    </li>
    <li>
    Player Four:${guess.playerFour}
    </li>
    `)
    }
    $('#counter').empty();
    $('#counter').append(`<li>Number of Guesses: ${count}</li>`);
}


function displayAllGuesses () {

    $.ajax({ 
        method: 'GET',
        url: '/guesses'
    })
    .then(function (response){

        console.log('got awersom gursee', response);
        renderGuesses(response);
        
    })
    .catch( function(error){

        console.log('shot shit shit');

    })
     
}