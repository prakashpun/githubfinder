// Init Github
const github = new Github();
// Init UI class
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert User not found
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show User profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
