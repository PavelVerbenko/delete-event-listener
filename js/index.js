const button = document.querySelector("#my-button");

const callback = (event) => {
  console.log(event.currentTarget.textContent);
}

button.addEventListener("click", callback);

setTimeout(() => {
  // TODO: remove the event listener from above
  button.removeEventListener("click", callback)
}, 1500);