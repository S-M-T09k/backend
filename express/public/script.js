const userNameDisplay = document.getElementById('userName');
const button = document.querySelector('button');

if (userNameDisplay) {
  userNameDisplay.innerText = window.prompt(`what's your name?`);
}

button.addEventListener('click', async () => {
  const photo = await fetch('/download');
  console.log(photo);
  window.alert('image downloaded');
})
