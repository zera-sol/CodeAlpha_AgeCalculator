document.addEventListener('DOMContentLoaded', (event) => {
    populateDatePickers();
});

function populateDatePickers() {
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');

    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < 12; i++) {
        let option = document.createElement('option');
        option.value = i + 1;
        option.textContent = monthNames[i];
        monthSelect.appendChild(option);
    }

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (!day || !month || !year) {
        alert("Please enter your complete birth date");
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('age').value = "You\'re" + age + " years old";
}

function reset() {
    document.getElementById('day').value = "";
    document.getElementById('month').value = "";
    document.getElementById('year').value = "";
    document.getElementById('age').value = "";
}
