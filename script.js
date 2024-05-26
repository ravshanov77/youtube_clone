document.addEventListener('DOMContentLoaded', function() {
    // Select all SVG buttons with the class 'three-dots-button'
    const threeDotsButtons = document.querySelectorAll('.three-dots-button');
  
    // Add an event listener to each button to prevent default action and stop propagation
    threeDotsButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the link from being followed
        event.stopPropagation(); // Prevent the event from bubbling up to the parent link
        // Add any additional logic you want to perform on button click
        console.log('Three-dots button clicked, link not followed.');
      });
    });
  });
  