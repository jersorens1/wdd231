document.getElementById('modal-button').addEventListener('click', function() {
    document.getElementById('membership-modal').showModal();
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('membership-modal').close();
});

// Set current timestamp
document.getElementById('timestamp').value = new Date().toISOString();