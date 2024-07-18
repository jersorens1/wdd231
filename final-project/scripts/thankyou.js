document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href;
    const queryString = currentUrl.split('?')[1];
    const formData = new URLSearchParams(queryString);

    function show(param) {
        return formData.get(param) || '';
    }

    const encodedDateStr = show('timestamp');
    const decodedDateStr = decodeURIComponent(encodedDateStr);
    const dateObj = new Date(decodedDateStr);
    const formattedDate = dateObj.toLocaleString();

    const showInfo = document.querySelector('#results');
    showInfo.innerHTML = `
        <p>Hey ${show("first")} ${show("last")}!</p>
        <p>We'll get back to you as soon as we can at the following email address.</p>
        <p><strong>Your Email:</strong> <a href="mailto:${show("email")}">${show("email")}</a></p>
        <p><strong>Your Message:</strong> ${show("message")}</p>
        <p><strong>Time Submitted:</strong> ${formattedDate}</p>
        ${show("newsletter") === 'on' ? '<p>Hooray!! 🥳 Thank you for subscribing to our newsletter!</p>' : ''}
    `;
});