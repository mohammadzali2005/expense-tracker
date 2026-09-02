import '../transactions/transactions.js';

// Setting categories to base (0)
let foodExpense = 0;
let housingExpense = 0;
let salary = 0;
let transportationExpense = 0;
let funExpense = 0;

const foodExpenseElement = document.querySelector('.food-expense');
const housingExpenseElement = document.querySelector('.housing-expense');
const salaryElement = document.querySelector('.salary');
const transportationExpenseElement = document.querySelector('.transportation-expense');
const funExpenseElement = document.querySelector('.fun-expense');

foodExpenseElement.textContent = foodExpense;
housingExpenseElement.textContent = housingExpense;
salaryElement.textContent = salary;
transportationExpenseElement.textContent = transportationExpense;
funExpenseElement.textContent = funExpense;
