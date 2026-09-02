import '../dashboard/script.js';

const modal = document.querySelector('.modal');
const container = document.querySelector('.container');
const addNewBtn = document.querySelector('.addNew-btn');

// Add New Entry Button in Header
if (addNewBtn) {
  addNewBtn.addEventListener('click', () => {
    modal.style.display = "block";
    container.style.display = "none";
  });
};