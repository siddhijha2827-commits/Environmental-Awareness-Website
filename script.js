

"use strict";

// Select HTML elements
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");

const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

const registerForm = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");


// 1. Mobile Navigation Menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu when a navigation link is clicked
const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});


// 2. Dark Mode Toggle
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    themeBtn.textContent = isDark ? "☀️" : "🌙";
    themeBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
});


// 3. Environmental Awareness Quiz
quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (selectedAnswer === null) {
        quizResult.textContent = "Please select an answer first!";
        quizResult.className = "message error";
    } else if (selectedAnswer.value === "c") {
        quizResult.textContent =
            "Correct! Reducing consumption and reusing items helps prevent waste. 🌱";

        quizResult.className = "message success";
    } else {
        quizResult.textContent =
            "Not quite! Try again. Think about reducing waste before it is created.";

        quizResult.className = "message error";
    }
});


// 4. Registration Form Validation
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Read values from input fields
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const consent = document.getElementById("consent").checked;

    // Check if name contains only letters and spaces
    const namePattern = /^[A-Za-z ]+$/;

    if (fullName === "" || email === "") {
        showMessage("Please fill in all the fields.", false);
    } else if (!namePattern.test(fullName)) {
        showMessage(
            "Please enter a name using letters and spaces only.",
            false
        );
    } else if (!consent) {
        showMessage(
            "Please agree to participate before registering.",
            false
        );
    } else {
        showMessage(
            "Thank you, " + fullName +
            "! Your registration details passed validation. 🌿",
            true
        );

        // Clear the form after successful validation
        registerForm.reset();
    }
});


// Helper function to display messages
function showMessage(message, isSuccess) {
    formMessage.textContent = message;

    if (isSuccess) {
        formMessage.className = "message success";
    } else {
        formMessage.className = "message error";
    }
}


// 5. Automatically Update Copyright Year
const currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;
