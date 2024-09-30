function showSeniorForm() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("senior-form-page").style.display = "block";
}
function showBranchSelection() {
    document.getElementById("senior-form-page").style.display = "none";
    document.getElementById("branch-selection").style.display = "block";
}
function showSeniorQuestions() {
    document.getElementById("branch-selection").style.display = "none";
    document.getElementById("senior-questions").style.display = "block";
}
function showSeniorThankPage() {
    document.getElementById("senior-questions").style.display = "none";
    document.getElementById("senior-thank-page").style.display = "block";
}
function showJuniorForm() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("junior-form-page").style.display = "block";
}
function showJuniorFeedback() {
    document.getElementById("junior-form-page").style.display = "none";
    document.getElementById("junior-feedback").style.display = "block";
}
function goHome() {
    document.get
}
// JavaScript to handle the button click and form toggle
document.querySelector('.join-today').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});

// Enable 'Create Account' button when a role is selected

radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        createAccountButton.disabled = false;
        createAccountButton.classList.add('enabled');
    });
});
// Enable 'Create Account' button when a role is selected
const radioButtons = document.querySelectorAll('input[name="role"]');
const createAccountButton = document.querySelector('.create-account');

radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        createAccountButton.disabled = false;
        createAccountButton.classList.add('enabled');
    });
});
