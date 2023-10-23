let intervalId;
        let time = 0;

        const timerDisplay = document.getElementById('timer');
        const startButton = document.getElementById('startButton');
        const stopButton = document.getElementById('stopButton');
        const resetButton = document.getElementById('resetButton');

        function startCountdown() {
            startButton.disabled = true;
            stopButton.disabled = false;
            resetButton.disabled = false;

            intervalId = setInterval(function() {
                time++;
                updateTimerDisplay();
            }, 1000);
        }

        function stopCountdown() {
            startButton.disabled = false;
            stopButton.disabled = true;
            resetButton.disabled = false;

            clearInterval(intervalId);
        }

        function resetCountdown() {
            startButton.disabled = false;
            stopButton.disabled = true;
            resetButton.disabled = true;

            clearInterval(intervalId);
            time = 0;
            updateTimerDisplay();
        }

        function updateTimerDisplay() {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;

            const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
            timerDisplay.textContent = formattedTime;
        }

        function pad(value) {
            return value < 10 ? `0${value}` : value;
        }

        startButton.addEventListener('click', startCountdown);
        stopButton.addEventListener('click', stopCountdown);
        resetButton.addEventListener('click', resetCountdown);