// Initialize an empty array to store words
const words = [];

// Function to process the input and split into words
function processInput(event) {
    event.preventDefault(); // Prevent default form submission
    const input = document.getElementById('wordInput');
    const inputText = input.value.trim();

    // Split the input text by commas
    const inputWords = inputText.split(',');

    // Add each word to the words array
    inputWords.forEach((word) => {
        const trimmedWord = word.trim();
        if (trimmedWord) {
            words.push(trimmedWord);
        }
    });

    // Display the list of words
    displayWords();
    input.value = ''; // Clear the input field
}

// Function to display the list of words
function displayWords() {
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = ''; // Clear existing content
    words.forEach((word) => {
        const wordItem = document.createElement('div');
        wordItem.textContent = word;
        wordList.appendChild(wordItem);
    });
}

// Attach the form submission event listener
const wordForm = document.getElementById('wordForm');
wordForm.addEventListener('submit', processInput);
