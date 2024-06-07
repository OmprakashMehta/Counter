let count = 0;

// Function to increment counter
function increment() {
  count++;
  document.getElementById("counter").innerHTML = count;
}

// Function to decrement counter
function decrement() {
  if (count > 0) {
    count--;
    document.getElementById("counter").innerHTML = count;
  }
}
