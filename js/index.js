const submit = document
  .getElementById("submit-button")
  .addEventListener("click", function () {
    const emailField = document.getElementById("input-mail").value;
    const passwordField = document.getElementById("type-password").value;
    if (emailField == "mail@gmail.com" && passwordField == "password") {
      console.log("Let him go ahead");
    }
    if (emailField == "mail@gmail.com" && passwordField == "password") {
      window.location.href = "Banking.html";
    } 
  });
  

