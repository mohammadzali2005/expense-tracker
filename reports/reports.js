import * as dashboardJs from '../dashboard/script.js';

// Opening Add Transaction Modal
dashboardJs.sidebarAddBtn.addEventListener('click', () => {
    modal.style.display = "block";
    container.style.display = "none";
})

// Closing Add Transaction Modal
dashboardJs.closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
    container.style.display = "flex";
})