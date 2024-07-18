document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('newsletterModal');
    const closeModal = document.querySelector('#close-modal');
    const newsletterInfoButton = document.getElementById('newsletter-info');
    const form = document.querySelector('form');
    const timestampField = document.getElementById('timestamp');

    form.addEventListener('submit', () => {
        const now = new Date();
        timestampField.value = now.toISOString();
    });

    newsletterInfoButton.addEventListener('click', () => {
        modal.style.display = 'flex';
        closeModal.focus();
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        newsletterInfoButton.focus();
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            newsletterInfoButton.focus();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            newsletterInfoButton.focus();
        }
    });
});