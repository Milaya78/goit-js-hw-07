const userNameElem = document.querySelector("#name-input");
const titleElem = document.querySelector("#name-output");

userNameElem.addEventListener("input", onUserNameInput);

function onUserNameInput() {
  const userName = userNameElem.value.trim() || "Anonymous";
  titleElem.textContent = `${userName}`;
}
