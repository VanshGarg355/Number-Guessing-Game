const minimum = 1;
        const maximum = 100;

        const answer = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);

        let attempts = 0;

        const guessInput = document.getElementById("guessInput");
        const checkBtn = document.getElementById("checkBtn");
        const message = document.getElementById("message");
        const attemptsDisplay = document.getElementById("attempts");

        checkBtn.onclick = function () {

            const guess = Number(guessInput.value);

            if (guess < minimum || guess > maximum || isNaN(guess)) {
                message.textContent = ` Enter a valid number between ${minimum} and ${maximum}`;
                return;
            }

            attempts++;
            attemptsDisplay.textContent = `Attempts: ${attempts}`;

            if (guess === answer) {
                message.textContent =
                    ` Congratulations! You guessed it in ${attempts} attempts.`;
                checkBtn.disabled = true;
            }
            else if (guess < answer) {
                message.textContent = " Too Low! Try Again.";
            }
            else {
                message.textContent = "  Too High! Try Again.";
            }
        };
    