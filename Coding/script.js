const billInput = document.getElementById('bill');
const tipPercentInput = document.getElementById('tip-percent');
const calculateBtn = document.getElementById('calculate-btn');
const resultBox = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipPercentInput.value);

    if (isNaN(bill) || isNaN(tipPercent)) {
        resultBox.textContent = "Please enter valid numbers!";
        return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;

    resultBox.textContent = `Tip: $${tipAmount.toFixed(2)} | Total: $${total.toFixed(2)}`;
});