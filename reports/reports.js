import '../dashboard/script.js';

// Setting Everything in Base (0)
let totalIncome = 0;
let totalExpense = 0;
let savings = 0;
let savingsRate = 0;

const totalIncomeElement = document.querySelector('.income-total-num');
const totalExpenseElement = document.querySelector('.expense-total-num');
const savingsElement = document.querySelector('.savings-num');
const savingsRateElement = document.querySelector('.savings-rate');

totalIncomeElement.textContent = totalIncome;
totalExpenseElement.textContent = totalExpense;
savingsElement.textContent = savings;
savingsRateElement.textContent = `${savingsRate}% Savings Rate`;

let foodExpense = 0;
let housingExpense = 0;
let transportationExpense = 0;
let funExpense = 0;

const foodExpenseElement = document.querySelector('.food-rank');
const housingExpenseElement = document.querySelector('.housing-rank');
const transportationExpenseElement = document.querySelector('.transportation-rank');
const funExpenseElement = document.querySelector('.fun-rank');

foodExpenseElement.textContent = foodExpense;
housingExpenseElement.textContent = housingExpense;
transportationExpenseElement.textContent = transportationExpense;
funExpenseElement.textContent = funExpense;