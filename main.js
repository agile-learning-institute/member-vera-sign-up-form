document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector("form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const error = document.getElementById("error");

    error.style.display = "none"; 

    form.addEventListener("submit", function(event) {
        if (passwordInput.value !== confirmPasswordInput.value) {
            error.style.display = "block";
            event.preventDefault(); 
        } else {
            error.style.display = "none";
        }
    });

    passwordInput.addEventListener("input", function() {
        if (passwordInput.value === confirmPasswordInput.value) {
            error.style.display = "none";
        }
    });

    confirmPasswordInput.addEventListener("input", function() {
        if (passwordInput.value === confirmPasswordInput.value) {
            error.style.display = "none";
        }
    });
});
