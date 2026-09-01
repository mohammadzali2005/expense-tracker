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

// Transactions
export let transactions = [];

// Add-Transaction-Btn in Quick Entry
// Quick Entry Transactions Counter
export let qeTransactionsCounter = -1;
// Quick Entry Add Btn
export const qeAddBtn = document.querySelector('.qe-add-btn');

// Quick Entry Inputs
export const descInput = document.querySelector('.qe-desc-input');
export const amountInput = document.querySelector('.qe-amount-input');
export const typeSelect = document.querySelector('.qe-type-select');
export const categorySelect = document.querySelector('.qe-category-select');

// Transactions Table
export const transactionsTable = document.querySelector('.transactions-table');

qeAddBtn.addEventListener('click', () => {
    transactions.push({
        description: descInput.value,
        date: new Date().toLocaleDateString('en-US', { dateStyle: 'medium' }),
        category: categorySelect.value,
        amount: amountInput.value
    });

    qeTransactionsCounter++;

    transactionsTable.innerHTML += `
    <tr>
        <td>${transactions[qeTransactionsCounter].description}</td>
        <td>${transactions[qeTransactionsCounter].date}</td>
        <td><p class="td-category">${transactions[qeTransactionsCounter].category}</p></td>
        <td><p class="td-amount">${transactions[qeTransactionsCounter].amount}</p></td>
    </tr>
`;
});

// Add Transaction Btn in Modal
// Modal Transactions Counter
export let modalTransactionsCounter = -1;
// Modal Add Btn
export const modalAddBtn = document.querySelector('.modal-add-btn');

// Modal Inputs
export const modalDescInput = document.querySelector('.modal-desc-input');
export const modalAmountInput = document.querySelector('.modal-amount-input');
export const modalTypeSelect = document.querySelector('.modal-type-select');
export const modalCategorySelect = document.querySelector('.modal-category-select');

modalAddBtn.addEventListener('click', () => {
    transactions.push({
        description: modalDescInput.value,
        date: new Date().toLocaleDateString('en-US', { dateStyle: 'medium' }),
        category: modalCategorySelect.value,
        amount: modalAmountInput.value
    });

    modalTransactionsCounter++;

    transactionsTable.innerHTML += `
    <tr>
        <td>${transactions[modalTransactionsCounter].description}</td>
        <td>${transactions[modalTransactionsCounter].date}</td>
        <td><p class="td-category">${transactions[modalTransactionsCounter].category}</p></td>
        <td><p class="td-amount">${transactions[modalTransactionsCounter].amount}</p></td>
    </tr>
`;
});
