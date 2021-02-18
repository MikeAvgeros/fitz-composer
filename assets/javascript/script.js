let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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
        }
    );
    return false;  // To block from loading a new page
}

function collapseNav() {
    document.getElementById("menu-btn").checked = false;
}
