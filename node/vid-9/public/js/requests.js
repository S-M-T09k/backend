const requests = Array.from(document.querySelectorAll('.request'));
const deleteButtons = Array.from(document.querySelectorAll('.deleteBtn'));

deleteButtons.forEach((button, index) => {
  button.addEventListener('click', () => {

    const id = button.parentElement.id;
    fetch('/customer-requests', {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    })

  })
})
