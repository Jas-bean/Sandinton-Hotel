/*-------CAROUSEL----------*/


let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



/*-------FAQ----------*/



/*-------CONTACT US FORM----------*/


function validateForm() {
    const name =
      document.getElementById("name").value;
    // const address =
    //   document.getElementById("address").value;
    const email =
      document.getElementById("email").value;
    const message =
        document.getElementById("message").value;
    const subject =
      document.getElementById("subject").value;
    const agree =
      document.getElementById("agree").checked;

    const nameError =
      document.getElementById("name-error");
    // const addressError = document.getElementById(
    //   "address-error"
    // );
    const emailError = document.getElementById(
      "email-error"
    );
    const messageError = document.getElementById(
    "message-error"
    );
    const subjectError = document.getElementById(
      "subject-error"
    );
    const agreeError = document.getElementById(
      "agree-error"
    );

    nameError.textContent = "";
    // addressError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    subjectError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
      nameError.textContent =
        "Please enter your name properly.";
      isValid = false;
    }

    if (message === "") {
       messageError.textContent =
         "Please enter your message.";
       isValid = false;
     }

    if (email === "" || !email.includes("@")) {
      emailError.textContent =
        "Please enter a valid email address.";
      isValid = false;
    }

    // if (password === "" || password.length < 6) {
    //   passwordError.textContent =
    //     "Please enter a password with at least 6 characters.";
    //   isValid = false;
    // }

    if (subject === "") {
      subjectError.textContent =
        "Please select a branch.";
      isValid = false;
    }

    if (!agree) {
      agreeError.textContent =
        "Please agree to the above information.";
      isValid = false;
    }

    console.log(isValid);
    return isValid;
  }


