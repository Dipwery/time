// 22/06/26--20/07/26
// Get the countdown elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const finishedMsg = document.getElementById('finished-msg');

// Set the target date and time (July 20, 2026 - 10:00 AM)
const targetDate = new Date('2026-07-20T10:00:00').getTime();
// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Update the countdown elements
    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.timer-display').style.display = 'none';
        finishedMsg.style.display = 'block';
    }
}, 1000);
