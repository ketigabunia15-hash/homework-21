const form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

    const personalNumber = document.getElementById('personal-number').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Personal Number:', personalNumber);
  console.log('Email:', email);
  console.log('Password:', password);

  alert('Form submitted! Check console for values.');
});
