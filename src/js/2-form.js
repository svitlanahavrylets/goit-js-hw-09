const formElement = document.querySelector('.feedback-form');

// const labels = document.querySelectorAll('.login-form label');

const formData = {
  email: '',
  message: '',
};

formElement.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = formElement.elements.email.value.trim();
  const messageValue = formElement.elements.message.value.trim();

  if (emailValue !== '' && messageValue !== '') {
    const formData = {
      email: formData.get('email'),
      message: formData.get('message'),
    };
    console.log(formData);
    formElement.reset();
  } else {
    alert('Fill please all fields');
  }
});
