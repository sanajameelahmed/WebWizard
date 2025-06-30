let inputField = document.getElementById('input_field');

function handleInput(num) {
    inputField.value += num;
}

function clearInput() {
    inputField.value = '';
}
function eraseLastCharacter() {
      inputField.value = inputField.value.slice(0, -1);
    }

function calculate() {
    inputField.value = eval(inputField.value);
}
