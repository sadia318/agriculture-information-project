

        function welcomeMessage() {
            alert("Welcome to Agricultural Information Hub!");
        }

        // Contact Form
        document
            .getElementById("contactForm")
            .addEventListener("submit", function (e) {

                e.preventDefault();

                alert("Your inquiry has been submitted successfully!");

                this.reset();
            });

    