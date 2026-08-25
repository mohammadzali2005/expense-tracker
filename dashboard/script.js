// Opening Add Transaction Modal
export const sidebarAddBtn = document.querySelector('.sidebar-add-btn');
export const modal = document.querySelector('.modal');
export const container = document.querySelector('.container');
sidebarAddBtn.addEventListener('click', () => {
    modal.style.display = "block";
    container.style.display = "none";
})

// Closing Add Transaction Modal
export const closeModalBtn = document.querySelector('.close-modal-btn');
closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
    container.style.display = "flex";
})

// Balance in sidebar & header
export const sidebarBalance = document.querySelector('.sidebar-balance');
export const headerBalance = document.querySelector('.header-balance');
export let balance = 0;

sidebarBalance.textContent = `$${balance}`;
headerBalance.textContent = `$${balance}`;