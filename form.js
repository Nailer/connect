let popup = document.getElementById("popup")

function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}


// ChatGPT Assist code ////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('myForm');
    var inputField = document.getElementById('inputField');
    var submitButton = document.getElementById('submitButton');

    inputField.addEventListener('input', function() {
        // Check if the input field is not empty
        if (inputField.value.trim() !== '') {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demo purpose
        // Process your form submission here
    });
});






 