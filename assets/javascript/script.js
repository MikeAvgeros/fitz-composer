window.onload = resetViewPortHeight;

function resetViewPortHeight() {
    let vh = window.innerHeight;
    document.getElementById("landing-page").style.height = vh;
    document.getElementById("home").style.height = vh;
}

function sendMail(contactForm) {
    emailjs.send("gmail", "fitz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "client_type": contactForm.client_type.value,
        "message": contactForm.description.value
    })
    .then(
        function() {
            document.getElementById("submit-notification").innerHTML = "Thank you for getting in touch! I'll get back to you shortly.";
            setTimeout(() => { homeReload(); }, 2000);
        },
        function(error) {
        console.log('FAILED...', error);
        document.getElementById("submit-notification").innerHTML = "There was an error with your message. Please try again.";
        }
    );
    return false;  // To block from loading a new page
}

function homeReload() {
    location.href = "#home";
    location.reload();
}

function collapseNav() {
    document.getElementById("navbar-menu-checkbox").checked = false;
}

function collapseRadio(radioID) {
    document.getElementById(radioID).checked = false;
}
