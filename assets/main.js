document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        const responseContainer = document.createElement('p');

        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                responseContainer.textContent = 'Thank you for your message! We will get back to you soon.';
                responseContainer.style.color = 'green';
                contactForm.reset();
            } else {
                throw new Error('Something went wrong. Please try again.');
            }
        } catch (error) {
            responseContainer.textContent = error.message;
            responseContainer.style.color = 'red';
        }

        contactForm.appendChild(responseContainer);

        setTimeout(() => {
            responseContainer.remove();
        }, 5000);
    });
});
