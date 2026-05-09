function showLoginHelp() {
    alert("Username is Student101 and Password is UNTITLED05");
}
function login() {
    const username = document.getElementById("usernameInp").value;
    const password = document.getElementById("passwordInp").value;
    const messageElem = document.getElementById("loginMessage");

    switch (true) {
        case (username === "Student101" && password === "UNTITLED05"):
            messageElem.textContent = "Login successful! Welcome, " + username + ".";
            messageElem.style.color = "green";
            window.location.href = "index.html";
            break;
        default:
            messageElem.textContent = "Incorrect Username or Password. Please try again.";
            messageElem.style.color = "red";
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