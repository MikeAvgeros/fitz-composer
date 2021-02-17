function sendMail(contactForm) {
    emailjs.send("gmail", "fitz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "client_type": contactForm.client_type.value,
        "message": contactForm.description.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
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
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

function collapseNav() {
    document.getElementById("menu-btn").checked = false;
}
