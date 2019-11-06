'use strict';
import Picker from 'pickerjs';
import './styles.css';
import './data.css';

const picker = new Picker(document.querySelector('.js-date-picker'), {
  format: 'MMM D, YYYY',
  text: {
    title: 'Pick a date',
  },
});

const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const error = document.querySelector('.error');

email.addEventListener(
  'input',
  function(event) {
    if (email.validity.valid) {
      error.innerHTML = '';
      error.className = 'error';
    }
  },
  false,
);
form.addEventListener(
  'submit',
  function(event) {
    if (!email.validity.valid) {
      error.innerHTML = 'I expect an e-mail, darling!';
      error.className = 'error active';

      event.preventDefault();
    }
  },
  false,
);
//фио
const myName = document.querySelector('.my-name');

myName.addEventListener('blur', event => {
  if (myName.value.length) {
    myName.classList.add('valid');
  } else {
    myName.classList.add('invalid');
  }
});

myName.addEventListener('focus', event => {
  if (myName.value.length) {
    myName.classList.remove('valid');
  } else {
    myName.classList.remove('invalid');
  }
});

//ввод только цыфр

const foneNumber = document.querySelector('.number');

oninput = function() {
  foneNumber.value = foneNumber.value.replace(/\D/g, '');
};

foneNumber.addEventListener('blur', event => {
  if (foneNumber.value.length === 10) {
    foneNumber.classList.add('valid');
  } else {
    foneNumber.classList.add('invalid');
  }
});

foneNumber.addEventListener('focus', event => {
  if (foneNumber.value.length === 10) {
    foneNumber.classList.remove('valid');
  } else {
    foneNumber.classList.remove('invalid');
  }
});

///

email.addEventListener('blur', event => {
  if (email.value.indexOf('@')) {
    email.classList.add('valid');
  } else {
    email.classList.add('invalid');
  }
});

email.addEventListener('focus', event => {
  if (email.value.indexOf('@')) {
    email.classList.remove('valid');
  } else {
    email.classList.remove('invalid');
  }
});
//страны
const country = document.querySelector('.country');

country.addEventListener('blur', event => {
  if (country.value.length) {
    country.classList.add('valid');
  } else {
    country.classList.add('invalid');
  }
});

country.addEventListener('focus', event => {
  if (country.value.length) {
    country.classList.remove('valid');
  } else {
    country.classList.remove('invalid');
  }
});

//пароль;
const password = document.querySelector('.password');

password.addEventListener('blur', event => {
  if (password.value.length) {
    password.classList.add('valid');
  } else {
    password.classList.add('invalid');
  }
});

password.addEventListener('focus', event => {
  if (password.value.length) {
    password.classList.remove('valid');
  } else {
    password.classList.remove('invalid');
  }
});

//повтор пароля
const passwordSecond = document.querySelector('.password-2');

passwordSecond.addEventListener('blur', event => {
  if (passwordSecond.value === password.value) {
    passwordSecond.classList.add('valid');
  } else {
    passwordSecond.classList.add('invalid');
  }
});

passwordSecond.addEventListener('focus', event => {
  if (passwordSecond.value === password.value) {
    passwordSecond.classList.remove('valid');
  } else {
    passwordSecond.classList.remove('invalid');
  }
});
