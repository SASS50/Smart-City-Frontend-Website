// Toggle the offcanvas menu
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.toggle('open');
});

// Close the offcanvas menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.navbar-collapse').classList.remove('open');
    });
});


// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('cname').value;
    var email = document.getElementById('cemail').value;
    var message = document.getElementById('cmessage').value;

    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Display a success message
    alert('Thank you for contacting us. We will get back to you soon!');
    document.getElementById('contactForm').reset();
});


// Question Dropdown Effect
var accordionItems = document.querySelectorAll('.accordion .card-header button');

accordionItems.forEach(function(item) {
  item.addEventListener('click', function() {
    this.classList.toggle('collapsed');
    var collapseTarget = this.getAttribute('data-target');
    var collapseElement = document.querySelector(collapseTarget);
    collapseElement.classList.toggle('show');
  });
});



