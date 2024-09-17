// Function to disable specific patient links and make them opaque
function disablePatientLinks(patientIds) {
    patientIds.forEach(id => {
        const patientLink = document.getElementById(id);
        if (patientLink) {
            patientLink.style.pointerEvents = 'none'; // Disable clicking
            patientLink.style.opacity = '0.5'; // Make it visually opaque
        }
    });
}

// Example usage: Disable links for Patient 3 and Patient 6
document.addEventListener('DOMContentLoaded', function() {
    disablePatientLinks(['Patient-3', 'Patient-6']);
});
