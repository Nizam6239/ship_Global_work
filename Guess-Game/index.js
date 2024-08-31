document.addEventListener('DOMContentLoaded',function(){
    let randomNum = Math.floor(Math.random()*100) + 1;
    let attemptsLeft = 5;
    const feedback = document.getElementById('feedback');
    const atttemptsDisplay = document.getElementById('attempts-left');    
    const guessInput = document.getElementById('guress-input');    
    const checkButton = document.getElementById('check-button');    
    const restartButton = document.getElementById('restart-button');    

    checkButton.addEventListener('click', function(){
        const userGuess = parseInt(guessInput.value);
        if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
            feedback.textContent = "Please Enter a valid number between 1 to 100";
            return;
        }
        attemptsLeft--;
        atttemptsDisplay.textContent = `You have ${attemptsLeft} chances:`
        if(userGuess === randomNum){
            feedback.textContent = `Congrat! You guess the number correctly in ${5-attemptsLeft} attemps.`;
            checkButton.disabled = true;
            restartButton.style.display = 'inline-block';
        }
        else if(userGuess > randomNum){
            feedback.textContent = 'You number is high';
        }
        else if(userGuess < randomNum){
            feedback.textContent = 'You number is less';
        }
        if(attemptsLeft === 0 && userGuess != randomNum){
            feedback.textContent = `Game Over ! the number was ${randomNum}`;
            checkButton.disabled = true;
            restartButton.style.display = 'inline-block';
        }
        guessInput.value = "";
        guessInput.focus();
    });
    restartButton.addEventListener('click',function(){
        attemptsLeft = 5;
        randomNum = Math.floor(Math.randomNum *100) + 1;
        feedback.textContent = 'Enter the Number Below';
        atttemptsDisplay.textContent = "You have 5 Chances";
        guessInput.value = '';
        checkButton.disabled = false;
        restartButton.style.display = none;
    });
});
