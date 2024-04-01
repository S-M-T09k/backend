const requests = Array.from(document.querySelectorAll('.request'));
const deleteButtons = Array.from(document.querySelectorAll('.deleteBtn'));

deleteButtons.forEach((button, index) => {
  button.addEventListener('click', async () => {

    const id = button.parentElement.id;
    console.log(id);
    try {
      const res = await fetch(`/customer-requests/${id}`, { method: 'Delete' })

      console.log(res);
      console.log(res.body);
      requests[index].remove();
      window.alert(`deleted document: ${id}`);

    } catch (error) {
      console.error(error);
    }

  })
})
