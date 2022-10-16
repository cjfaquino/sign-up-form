import {
  setEmailError,
  setFirstNameError,
  setLastNameError,
  setPasswordError,
  setPhoneError,
  setPwdConfirmError,
} from './setErrors';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const password = form.querySelector('#password');
const passwordConfirm = form.querySelector('#password-confirm');

const getSibling = (currentNode) => {
  const nextSibling = currentNode.nextElementSibling;
  return nextSibling;
};

const showError = (input) => {
  const error = getSibling(input);
  error.className = 'error active';
  input.className = 'active';

  if (input.name === 'firstName') {
    setFirstNameError(input, error);
  } else if (input.name === 'lastName') {
    setLastNameError(input, error);
  } else if (input.name === 'phone') {
    setPhoneError(input, error);
  } else if (input.name === 'email') {
    setEmailError(input, error);
  } else if (input.name === 'password') {
    setPasswordError(input, error);
  } else if (input.name === 'password-confirm') {
    setPwdConfirmError(input, error);
  }
};

const checkValid = (input) => {
  const error = getSibling(input);
  return () => {
    if (
      !input.validity.valid ||
      (password.value !== passwordConfirm.value && passwordConfirm.value)
    ) {
      showError(input);
    } else {
      error.textContent = '';
      error.className = 'error';
      input.className = '';
    }
  };
};

const checkSubmit = (event) => {
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      showError(input);
      event.preventDefault();
    }
  });
  if (form.checkValidity()) {
    alert('High five! It cleared.');
  }
};

inputs.forEach((input) => {
  input.addEventListener('input', checkValid(input));
});

form.addEventListener('submit', checkSubmit);
