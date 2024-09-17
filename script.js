// Function to disable specific patient links
function disablePatientLinks(patientIds) {
    patientIds.forEach(id => {
        const patientLink = document.getElementById(id);
        if (patientLink) {
            patientLink.style.pointerEvents = 'none'; // Disable clicking
            patientLink.style.opacity = '0.5'; // Optionally, visually indicate disabled state
        }
    });
}

// Example usage: Disable links for Patient 2 and Patient 4
document.addEventListener('DOMContentLoaded', function() {
    disablePatientLinks([Patient 10]);
});
