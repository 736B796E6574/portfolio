function sendEmail(contactForm) {
    console.log("bastard")
    emailjs.send("gmail", "template_rsjzvvr", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailAddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}