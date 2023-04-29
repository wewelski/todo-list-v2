const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const txtVal = input.value;
  const listItem = document.createElement('li');
  listItem.innerText = txtVal;
  list.append(listItem);
  input.value = "";
});