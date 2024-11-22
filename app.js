const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const resetButton = document.getElementById("reset");
const filters = document.querySelectorAll('input[name="filter"]');

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction(e) {
    e.preventDefault();

    if (description.value.trim() === "" || amount.value.trim() === "") {
        alert("Please add a description and amount");
    } else {
        const transaction = {
            id: generateID(),
            description: description.value,
            amount: +amount.value,
        };

        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();

        description.value = "";
        amount.value = "";
    }
}

function generateID() {
    return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");
    item.innerHTML = `
        ${transaction.description} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="edit-btn" onclick="editTransaction(${transaction.id})">Edit</button>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>
    `;
    list.appendChild(item);
}

function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts;
  }