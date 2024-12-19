document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  const fullname = document.getElementById('fullname').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  //Show alert message
  alert("Message Sent Successfully");
  alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
  

  // Clear the form
  document.getElementById('contact-form').reset();
});