const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Start the stopwatch
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // Adjust start time for paused state
        timer = setInterval(update, 10); // Update every 10ms
        isRunning = true;
    }
}

// Stop the stopwatch
function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

// Reset the stopwatch
function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00:00"; // Reset to initial display
}

// Update the stopwatch display
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Format and display the time
    display.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}
