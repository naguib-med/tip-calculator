document.getElementById('calculate-tip').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('tip-amount').innerText = `Tip Amount: ${tipAmount.toFixed(2)}`;
    document.getElementById('total-amount').innerText = `Total Amount: ${totalAmount.toFixed(2)}`;
});
