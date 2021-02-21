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
            alert("Email sent succesfully!");
            // scroll to top from here
        }
    );
    return false;  // To block from loading a new page
}

function subscribe(subscribeForm) {
    emailjs.send("gmail", "fitz", {
        "from_name": "Website Visitor",
        "from_email": subscribeForm.email_address.value,
        "message": "Please add me to your mailing list"
    })
    .then(
        function() {
            alert("Thank you!");
        },
        function(error) {
        console.log('FAILED...', error);
        }
    );
    return false;  // To block from loading a new page
}

function collapseNav() {
    document.getElementById("navbar-menu-checkbox").checked = false;
}
