// Opening Adding Transaction Modal
const sidebarAddBtn = document.querySelector('.sidebar-add-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');
sidebarAddBtn.addEventListener('click', () => {
    modal.style.display = "block";
    container.style.display = "none";
})

// Closing Adding Transaction Modal
const closeModalBtn = document.querySelector('.close-modal-btn');
closeModalBtn.addEventListener('click', () => {
    modal.style.display = "none";
    container.style.display = "flex";
})