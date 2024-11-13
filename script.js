let lastMouseX = 0;
let lastMouseY = 0;
let lastTime = 0;
let hue = 0; // Starting hue value

// Calculate the speed of mouse movement
function calculateMouseSpeed(event) {
  const currentTime = Date.now();
  const timeDifference = currentTime - lastTime;

  if (lastTime === 0) {
    lastTime = currentTime;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    return;
  }

  const distance = Math.sqrt(
    Math.pow(event.clientX - lastMouseX, 2) +
      Math.pow(event.clientY - lastMouseY, 2)
  );

  const speed = distance / timeDifference;

  // Update last values
  lastMouseX = event.clientX;
  lastMouseY = event.clientY;
  lastTime = currentTime;

  // Calculate the new hue based on speed
  adjustColorBasedOnSpeed(speed);
}

// Adjust the background and avatar color based on speed
function adjustColorBasedOnSpeed(speed) {
  // Increase hue continuously based on speed, allowing it to loop around 360
  hue = (hue + speed * 10) % 360; // Multiplier adjusts the rate of color change

  // Apply the hue to both body and avatar for a consistent look
  document.body.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
  document.getElementById(
    "avatar"
  ).style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
}

// Content Section Highlighting
function highlightSection(section) {
  section.classList.toggle("highlighted-section");
}

// Listen to mousemove event
document.addEventListener("mousemove", calculateMouseSpeed);

function createTailElement(x, y) {
  const tail = document.createElement("div");
  tail.className = "fox-tail";

  // Apply the synchronized color with the background hue
  tail.style.background = `linear-gradient(135deg, hsl(${hue}, 80%, 50%), hsl(${hue}, 90%, 70%), hsl(${hue}, 100%, 90%))`;
  tail.style.left = `${x}px`;
  tail.style.top = `${y}px`;

  document.body.appendChild(tail);

  // Remove the tail element after a few seconds to prevent clutter
  setTimeout(() => {
    tail.remove();
  }, 2000); // Duration of the tail's visibility
}

// Update the mouse move event to add a tail effect
document.addEventListener("mousemove", (event) => {
  createTailElement(event.pageX, event.pageY);
});

// Create a custom arrow cursor
const customCursor = document.createElement("div");
customCursor.className = "custom-cursor";
document.body.appendChild(customCursor);

// Update the arrow position and color to match the hue
document.addEventListener("mousemove", (event) => {
  // Position the custom cursor near the mouse
  customCursor.style.left = `${event.pageX}px`;
  customCursor.style.top = `${event.pageY}px`;

  // Synchronize the color with the current hue
  customCursor.style.borderColor = `hsl(${hue}, 80%, 50%)`;
  createTailElement(event.pageX, event.pageY);
});
