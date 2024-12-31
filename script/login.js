// Handle login and show alert message
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        console.log("Entered Username: ", username);
        console.log("Entered Password: ", password);

        // Retrieve saved credentials from local storage
        const savedUserData = JSON.parse(localStorage.getItem("userData"));
        console.log("Saved User Data: ", savedUserData);

        // Check if credentials match
        if (savedUserData && savedUserData.username === username && savedUserData.password === password) {
            // Show alert message and simulate login
            alert("Login successful!");

            // Display user data
            console.log("Full Name: " + savedUserData.fullname);
            console.log("Username: " + savedUserData.username);
            console.log("Email: " + savedUserData.email);

            // Redirect to home page
            window.location.href = "homepage.html";
        } else {
            // Show alert message for invalid credentials
            alert("Invalid username or password!");
        }
    });
});
