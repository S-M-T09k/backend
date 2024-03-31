// selects all tags with the class onlyNumbers and make the only able to input numbers
document.querySelectorAll(".only-numbers").forEach(element => {
  element.addEventListener("keypress", evt => {
      //element.setAttribute("maxlength", "2");

      
      // This function is executed when a key is pressed

      // The event parameter 'evt' contains information about the key press event

      // Check if the key pressed has a character code outside the range of numbers 0-9
      if (evt.which < 48 || evt.which > 57) {
      // If the key is not a number (0-9), prevent its default behavior
      // In this case, preventing the default behavior means preventing the key from being typed into the input field
          evt.preventDefault();
      }
  });
});