function showLoginHelp() {
    alert("Username is Markiplier and Password is Soupify2024");
}
function login() {
    const username = document.getElementById("usernameInp").value;
    const password = document.getElementById("passwordInp").value;
    const messageElem = document.getElementById("loginMessage");
    if (password === "Soupify2024" && username === "Markiplier") {
        document.getElementById("loginMessage").textContent = "Login successful! Welcome, " + username + ".";
        document.getElementById("loginMessage").style.color = "green";
    } else {
        document.getElementById("loginMessage").textContent = "Incorrect Username or Password. Please try again.";
        document.getElementById("loginMessage").style.color = "red";
    }
}
function toggleVisi(){
    const passwordInput = document.getElementById("passwordInp");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}