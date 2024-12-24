function navigateToPage() {
    const selectElement = document.getElementById('pageSelector');
    const selectedValue = selectElement.value;

    if (selectedValue) {
        window.location.href = selectedValue; // Redirect to the selected URL
    }
}