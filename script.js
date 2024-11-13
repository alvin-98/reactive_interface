// Theme Adjustment Function
function setTheme(theme) {
  document.body.className = theme;
}

function updateAvatar(trait) {
  console.log(`Avatar trait set to: ${trait}`);
  const avatar = document.getElementById("avatar");

  // Remove all avatar-related classes before adding the new one
  avatar.classList.remove("neutral-avatar", "energetic-avatar", "calm-avatar");

  // Apply the appropriate class based on the trait
  if (trait === "energetic") {
    avatar.classList.add("energetic-avatar");
  } else if (trait === "calm") {
    avatar.classList.add("calm-avatar");
  } else {
    avatar.classList.add("neutral-avatar"); // Default state
  }
}

// Content Section Highlighting
function highlightSection(section) {
  section.classList.toggle("highlighted-section");
}
