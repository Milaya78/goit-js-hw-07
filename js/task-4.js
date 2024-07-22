const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (!email.value || !password.value)
    return alert("All form fields must be filled in");

  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(userData);

  e.currentTarget.reset();
}
