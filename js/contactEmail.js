const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact');
const mesAlt = 'Message Successful'
document.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Clicked");



  let ebody = 
  `<b>Name: </b> ${fname.value}&nbsp; ${lname.value}
  <br>
  <b>Email: </b>${email.value}
  <br>
  Phone Number: </b>${phone.value}
  `
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "aniemenabeluchi@gmail.com",
    Password: "D120CE9D505742067C873A0E51AEEA09D936",
    To: 'aniemenabeluchi@gmail.com',
    From: 'aniemenabeluchi@gmail.com',
    Subject: 'Contacting for Consultancy',
    Body: ebody
  }).then(
    message => alert(mesAlt)
  );
  fname.value = "";
  lname.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
})