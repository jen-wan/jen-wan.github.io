const text = "Hi, I'm Jenny."; // The text to be typed
let index = 0; // Current character index

// Function to simulate typing effect
function type() {
  // Get the element to type into
  const typingText = document.querySelector('.type-me');

  // Check if the index is less than the length of the text
  if (index < text.length) {
    // Append the current character to the typing text
    typingText.textContent += text.charAt(index);
    index++;

    // Wait for a random time before typing the next character
    setTimeout(type, Math.random() * 150 + 50);
  }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", function () {
  type();
});
