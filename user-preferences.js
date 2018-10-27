'use strict';

let preferencesForm = document.querySelector('#preferences');

if (preferencesForm) {
  preferencesForm.addEventListener('submit', updateUserPreferences);

  if (localStorage.getItem('user-name')) {
    greetUser(localStorage.getItem('user-name'));
  }

  if (localStorage.getItem('user-bg-color')) {
    updateBackgroundColor(localStorage.getItem('user-bg-color'));
  }

  function updateUserPreferences(event) {
    event.preventDefault();
    let userNameValue = document.querySelector('#userName').value,
        bgColorValue = document.querySelector('#bgColor').value;

    localStorage.setItem('user-name', userNameValue);
    localStorage.setItem('user-bg-color', bgColorValue);

    updateBackgroundColor(bgColorValue);
    greetUser(userNameValue);
    console.log(userNameValue);
    console.log(bgColorValue);

    // document.querySelector('#preferences').appendChild();

  }

  function updateBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    document.querySelector('#bgColor').value = color;
  }

  function greetUser(userName) {
    if (document.querySelector('#name')) {
      document.querySelector('#name').innerHTML = userName
    } else {
      let greeting = document.createElement('p');
      greeting.innerHTML = 'Hi, <span id="name">' + userName + '</span>, welcome to our wonderful website.';
      preferencesForm.append(greeting);
    }
  }
}


// window.addEventListener('storage', function(event) {
//
// });

// function updatePage2(newValue) {
//   let updatedValueElement = document.querySelector('#updatedValue');
//
//   if (updatedValue) {
//     updatedValueElement.innerHTML = newValue;
//   }
// }
