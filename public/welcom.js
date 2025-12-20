// =========================
// FLIP BETWEEN SIGN IN ↔ SIGN UP
// =========================
const authBox = document.getElementById("authBox");
const toSignUp = document.getElementById("toSignUp");
const toSignIn = document.getElementById("toSignIn");

toSignUp.onclick = () => authBox.classList.add("flipped");
toSignIn.onclick = () => authBox.classList.remove("flipped");

// =========================
// LOCAL STORAGE SIMULATED DB
// =========================
const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");
const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

// =========================
// SIGN UP LOGIC
// =========================
const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    const users = getUsers();
    if (users.find(u => u.email === email)) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Email already exists!";
        return;
    }

    users.push({ username, email, password, activated: true }); // set activated true for testing
    saveUsers(users);

    signupMessage.style.color = "lightgreen";
    signupMessage.textContent = "Account created! Please login.";

    // flip to login
    setTimeout(() => authBox.classList.remove("flipped"), 1000);
});

// =========================
// SIGN IN LOGIC
// =========================
const signinForm = document.getElementById("signinForm");
const loginMessage = document.getElementById("loginMessage");

signinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Invalid email or password!";
        return;
    }

    if (!user.activated) {
        loginMessage.style.color = "orange";
        loginMessage.textContent = "Account not activated!";
        return;
    }

    loginMessage.style.color = "lightgreen";
    loginMessage.textContent = "Login successful! Redirecting...";

    // Save login info to localStorage (simulating session)
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Redirect (simulate dashboard)
    setTimeout(() => {
        window.location.href = "site.html"; // create dashboard.html for testing
    }, 1000);
});
