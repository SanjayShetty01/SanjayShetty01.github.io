document.addEventListener('DOMContentLoaded', function () {
    const subCaptionElement = document.getElementById('typed-caption');
    const roles = ["R Developer", "R Shiny Developer", "AWS Guy", "Scala Programmer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        const currentChar = isDeleting ? currentRole.substring(0, charIndex - 1) : currentRole.substring(0, charIndex + 1);

        subCaptionElement.textContent = currentChar;

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 200);
        }

        isDeleting ? charIndex-- : charIndex++;
    }

    type();
});
