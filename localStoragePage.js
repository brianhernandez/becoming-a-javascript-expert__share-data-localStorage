'use strict';

let formElement = document.querySelector('#form');

if (formElement) {
  formElement.addEventListener('submit', addOrUpdateLocalStorage);

  function addOrUpdateLocalStorage(event) {
    let inputTextValue = document.querySelector('input[type="text"]').value;
    console.log(inputTextValue);
    localStorage.setItem('data', inputTextValue);
    event.preventDefault();
  }
}


window.addEventListener('storage', function(event) {
    localStorage.setItem(event.key, event.newValue);
    console.log(event.key, event.newValue);
    updatePage2(event.newValue);
});

function updatePage2(newValue) {
  let updatedValueElement = document.querySelector('#updatedValue');

  if (updatedValue) {
    updatedValueElement.innerHTML = newValue;
  }
}
