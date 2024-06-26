let popup = document.getElementById("popup")

function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}


// ChatGPT Assist code ////////////////////////////////

// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById('myForm');
//     var inputField = document.getElementById('inputField');
//     var submitButton = document.getElementById('submitButton');

//     inputField.addEventListener('input', function() {
//         // Check if the input field is not empty
//         if (inputField.value.trim() !== '') {
//             submitButton.removeAttribute('disabled');
//         } else {
//             submitButton.setAttribute('disabled', 'disabled');
//         }
//     });

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission for demo purpose
//         // Process your form submission here
//     });
// });

function showForm(formId) {
    // to hide all the inputs and textareas
    var forms = document.getElementsByTagName('form')
    for (var i = 0; i < forms.length; i++) {
        forms[i].classList.add('hidden')
    }

    // to show the selected form
    var selectedForm = document.getElementById(formId);
    selectedForm.classList.remove('hidden')
}

//  Chat Assist
function toggleActive(button) {
    // Remove active class from all buttons
    var buttons = document.getElementsByClassName('ton-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    // Add active class to the clicked button
    button.classList.add('active');
}









 