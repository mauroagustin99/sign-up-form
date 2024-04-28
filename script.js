//Password validation
const psw = document.getElementById('password');
const confirm_psw = document.getElementById('confirm-password');
function validatePassword() {
  if (psw.value === confirm_psw.value) {
    psw.setCustomValidity('');
    confirm_psw.setCustomValidity('');
  } else {
    psw.setCustomValidity('Passwords do not match');
    confirm_psw.setCustomValidity('Passwords do not match');
    psw.style.borderColor = 'red';
    confirm_psw.style.borderColor = 'red';
  }
}

psw.addEventListener('input', validatePassword);
confirm_psw.addEventListener('input', validatePassword);

//Form API functionality
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  if (!form.checkValidity()) {
    event.preventDefault(); // Avoid submitting the form if there are validation errors
  }
});
