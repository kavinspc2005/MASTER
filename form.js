document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();
  let firstname = document.getElementById("firstname").value.trim();
  let lastname = document.getElementById("lastname").value.trim();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let email = document.getElementById("email").value.trim();
  let gender = document.querySelector('input[name="GENDER"]:checked');
  let phone = document.getElementById("phone").value.trim();
  let DOB = document.getElementById("DOB").value.trim();
  let filess = document.getElementById("filess").value.trim();

  if (firstname === "") {
    alert("Name is required");
    return;
  }
  if (lastname === "") {
    alert("Name is required");
    return;
  }
  if (username === "") {
    alert("Name is required");
    return;
  }
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Enter a valid email address");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }
  if (!GENDER) {
    alert("please select the gender");
    return;
  }

  if (phone == 0) {
    alert("please enter the mobile number");
  }

  if (DOB == 0) {
    alert("please enter date of birth");
  }
  if (filess == 0) {
    alert("please enter date of birth");
  }
  document.getElementById(
    "output"
  ).innerHTML += `<p><strong>FIRSTNAME:</strong> ${firstname}</p><p><strong>LAST NAME:</strong> ${lastname}</p><p><strong>NAME:</strong> ${username}</p>
<p><strong>Email:</strong> ${email}</p> <p><strong>GENDR :</strong>${GENDER.value}</p>
<p><strong>MOBILE NUMBER :</strong> ${phone}</p><p><strong>DOB</strong>${DOB}</p><p><strong>filess</strong>${filess}</p>

`;

  document.getElementById("myForm").reset();
});