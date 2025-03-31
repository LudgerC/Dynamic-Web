document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const cancelButton = document.getElementById("cancelButton");
    const secondsInput = document.getElementById("seconds");
    const timerDisplay = document.getElementById("timerDisplay");
    const messageDisplay = document.getElementById("message");
    
    let timerPromise;
    let cancelTimer;

    function startTimer(duration) {
        return new Promise((resolve, reject) => {
            let timeLeft = duration;
            timerDisplay.textContent = timeLeft;
            messageDisplay.style.display = "none";
            
            const interval = setInterval(() => {
                if (timeLeft <= 1) {
                    clearInterval(interval);
                    resolve("Timer voltooid!");
                }
                timeLeft--;
                timerDisplay.textContent = timeLeft;
            }, 1000);
            
            cancelTimer = () => {
                clearInterval(interval);
                reject("Timer geannuleerd!");
            };
        });
    }
    
    startButton.addEventListener("click", () => {
        const duration = parseInt(secondsInput.value, 10);
        if (isNaN(duration) || duration < 1 || duration > 60) {
            messageDisplay.textContent = "Voer een geldig aantal seconden in (1-60).";
            messageDisplay.style.display = "block";
            return;
        }
        
        startButton.disabled = true;
        cancelButton.disabled = false;
        
        timerPromise = startTimer(duration)
            .then((message) => {
                messageDisplay.textContent = message;
                messageDisplay.style.display = "block";
            })
            .catch((error) => {
                messageDisplay.textContent = error;
                messageDisplay.style.display = "block";
            })
            .finally(() => {
                startButton.disabled = false;
                cancelButton.disabled = true;
            });
    });
    
    cancelButton.addEventListener("click", () => {
        if (cancelTimer) {
            cancelTimer();
        }
    });
});