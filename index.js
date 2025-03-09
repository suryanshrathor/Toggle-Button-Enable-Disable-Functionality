// Get DOM elements
const disableBtn = document.getElementById('disableBtn');
const enableBtn = document.getElementById('enableBtn');
const resetBtn = document.getElementById('resetBtn');
const statusMessage = document.getElementById('statusMessage');
const clickSound = document.getElementById('clickSound');

// Initialize the state
function initializeState() {
    disableBtn.disabled = true;
    enableBtn.disabled = false;
    disableBtn.textContent = 'Disable Switch1';
    enableBtn.textContent = 'Enable Switch2';
    updateStatusMessage('Switch1 is Disabled');
}

// Update status message with fade effect
function updateStatusMessage(message) {
    statusMessage.style.opacity = '0';
    setTimeout(() => {
        statusMessage.textContent = message;
        statusMessage.style.opacity = '1';
    }, 300);
}

// Play click sound
function playClickSound() {
    clickSound.currentTime = 0; // Reset sound to start
    clickSound.play().catch(err => console.log('Sound playback failed:', err));
}

// Toggle button states
function toggleButtons(source) {
    if (source === 'disableBtn') {
        disableBtn.disabled = true;
        enableBtn.disabled = false;
        disableBtn.textContent = 'Disable Switch1';
        enableBtn.textContent = 'Enable Switch2';
        updateStatusMessage('Switch1 is Disabled');
    } else if (source === 'enableBtn') {
        disableBtn.disabled = false;
        enableBtn.disabled = true;
        disableBtn.textContent = 'Enable Switch1';
        enableBtn.textContent = 'Disable Switch2';
        updateStatusMessage('Switch1 is Enabled');
    }
    playClickSound();
}

// Event listeners for clicks
disableBtn.addEventListener('click', () => toggleButtons('disableBtn'));
enableBtn.addEventListener('click', () => toggleButtons('enableBtn'));

// Event listener for reset
resetBtn.addEventListener('click', () => {
    initializeState();
    playClickSound();
});

// Keyboard accessibility (spacebar to toggle)
disableBtn.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault(); // Prevent scrolling
        if (!disableBtn.disabled) toggleButtons('disableBtn');
    }
});

enableBtn.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault(); // Prevent scrolling
        if (!enableBtn.disabled) toggleButtons('enableBtn');
    }
});

resetBtn.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault(); // Prevent scrolling
        initializeState();
        playClickSound();
    }
});

// Initialize on page load
initializeState();