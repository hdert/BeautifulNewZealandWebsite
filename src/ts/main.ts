function formHandler() {
  var firstname = (document.getElementById("firstname") as HTMLInputElement)
    .value;
  var lastname = (document.getElementById("lastname") as HTMLInputElement)
    .value;
  var email = (document.getElementById("email") as HTMLInputElement).value;
  var phonenum = (document.getElementById("phonenum") as HTMLInputElement)
    .value;
  var dateofbirth = (document.getElementById("dateofbirth") as HTMLInputElement)
    .value;
  var message = (document.getElementById("message") as HTMLTextAreaElement)
    .value;
  var agree = (document.getElementById("agreetotos") as HTMLInputElement)
    .checked;

  if ([firstname, lastname, email].includes("") || agree == false) {
    var messageToUser =
      "<div class='alert alert-danger' role='alert'> Please make sure you have entered your full name, email address and you have agreed to your Terms of Service</div>";
  } else {
    var messageToUser =
      "<div class='alert alert-primary' role='alert'> Thanks for subscribing to our newsletter " +
      firstname +
      " " +
      lastname +
      ". We have sent an email to " +
      email +
      " to confirm your subscription.</div>";
    document.getElementById("formContainer").innerHTML = messageToUser;
  }
}
document.getElementById("submitButton").onclick = function () {
  formHandler();
};

// Import just what we need

// import 'bootstrap/js/dist/alert';
// import "bootstrap/js/dist/button";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/collapse";
// import 'bootstrap/js/dist/dropdown';
// import "bootstrap/js/dist/modal";
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
