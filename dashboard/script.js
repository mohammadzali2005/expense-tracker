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

// Add transaction btn in quick entry
export const qeAddBtn = documen.querySelector('.qu-add-btn');
qeAddBtn.addEventListener('click', () => {

});

// Transactions
export let transactions = [
    {
        description: "Monthly Salary",
        date: "Aug 5, 2026",
        category: "Salary",
        amount: `$${2500}`
    }
];

export const transactionsTable = document.querySelector('.transactions-table');
transactionsTable.innerHTML += `
    <tr>
        <td>${transactions[0].description}</td>
        <td>${transactions[0].date}</td>
        <td><p class="td-category">${transactions[0].category}</p></td>
        <td><p class="td-amount">${transactions[0].amount}</p></td>
    </tr>
`;