let attempts = 0;
const maxAttempts = 1;
const correctWord = "end"; // Make this lowercase to match input
const link = document.getElementById('myLink');
const message = document.getElementById('message');

document.getElementById('submitBtn').addEventListener('click', function() {
    const input = document.getElementById('numberInput').value.toLowerCase(); // Convert input to lowercase for comparison

    if (input === '') {
        message.textContent = 'Please enter a number.';
        return;
    }

    if (input === correctWord.toLowerCase()) { // Ensure comparison is lowercase
        // Correct word entered
        link.href = 'November_cipher_month_summary_fifth.html'; // Redirect to the correct link
        message.textContent = 'Correct word! Click the link below to proceed.';
        link.classList.remove('disabled');
        link.classList.add('enabled');
        link.onclick = function() { window.location.href = link.href; }; // Enable the link click
    } else {
        attempts++;

        // If the user has exhausted their attempts
        if (attempts >= maxAttempts) {
            link.href = 'wrong.html'; // Redirect to bait link
            message.textContent = 'The link is now clickable. Try it out!';
            link.classList.remove('disabled');
            link.classList.add('enabled');
            link.onclick = function() { window.location.href = link.href; }; // Enable the link click
        } else {
            message.textContent = 'That word is not correct. Try again.';
        }
    }
});
