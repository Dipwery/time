const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');
const timerDisplay = document.querySelector('.timer-display');
const finishedMsg = document.getElementById('finished-msg');

// Update this date to the new countdown target.
const targetDate = new Date('2031-06-30T12:00:00').getTime();
const startDate = new Date('2026-10-11T00:00:00').getTime();

function updateProgress() {
    const now = Date.now();
    const totalDuration = targetDate - startDate;
    const elapsed = now - startDate;

    if (totalDuration <= 0) {
        progressFill.style.width = '100%';
        progressPercent.textContent = '100%';
        return;
    }

    let progress = (elapsed / totalDuration) * 100;
    if (progress < 0) progress = 0;
    if (progress > 100) progress = 100;

    progressFill.style.width = `${progress}%`;
    progressPercent.textContent = `${Math.round(progress)}%`;
}

function updateCountdown() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);
        timerDisplay.style.display = 'none';
        finishedMsg.style.display = 'block';
        progressFill.style.width = '100%';
        progressPercent.textContent = '100%';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
    updateProgress();
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
