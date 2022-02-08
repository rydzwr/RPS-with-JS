const game = () => 
{
  let pScore = 0;
  let cScore = 0;

  // Start the Game

  const startGame = () => 
  {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => 
    {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // Play Match

  const playMatch = () => 
  {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    // Computer options

    const computerOptions = ['rock', 'paper', 'scissors'];
    
    options.forEach(option => 
    {
        option.addEventListener('click', function()
        {
            // Computer Choice

            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
        });
    });
  };

  const computerHands = (playerChoice, computerChoice) => 
  {
    // Update text
    const winner = document.querySelector('.winner');

    // Check for tie
    if(playerChoice === computerChoice)
    {
        winner.textContent = 'Tie!'
        return;
    }

    // Check
    if(playerChoice === 'rock')
    {
        if(computerChoice === 'scissors')
        {
            winner.textContent = 'Player Wins!';
        }
        else
        {
            winner.textContent = 'Computer Wins';
        }

        // FINISHED HERE 37:45!

    }
  }

  // Call all the inner function

  startGame();
  playMatch();
};

// Start game function

game();
