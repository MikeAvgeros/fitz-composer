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
            alert("Thank you for getting in touch! We'll get back to you shortly.");
        },
        function(error) {
        console.log('FAILED...', error);
            alert("There was an error with your form. Please try again.")
        }
    );
    return false;  // To block from loading a new page
}

function collapseNav() {
    document.getElementById("navbar-menu-checkbox").checked = false;
}

function collapseService(x) {
    document.getElementById("service-header-radio" + x).checked = false;
}
