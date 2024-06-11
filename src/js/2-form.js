const formElement = document.querySelector('.feedback-form');
const inputElement = document.querySelector('input[type="email"]');
const textareaElement = document.querySelector('textarea[name="message"]');

const formData = {
  email: '',
  message: '',
};

formElement.addEventListener('input', () => {
  const email = inputElement.value.trim();
  const message = textareaElement.value.trim();
  const formData = { email, message };
  saveToLS('feedback-form-state', formData);
});

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('feedback-form-state');

  inputElement.value = data?.email || '';
  textareaElement.value = data?.message || '';
});

formElement.addEventListener('submit', event => {
  event.preventDefault();
  const email = inputElement.value.trim();
  const message = textareaElement.value.trim();
  if (email !== '' && message !== '') {
    const formData = { email, message };
    console.log(formData);
    formElement.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Fill please all fields');
  }
});

// ========================================================
function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
// ========================================================
