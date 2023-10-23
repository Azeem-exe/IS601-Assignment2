function calc() {
    // Get user input values
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tippercent = parseFloat(document.getElementById('tippercent').value);
    if (isNaN(subtotal) || isNaN(tippercent)) {
        document.getElementById('totalamount').innerHTML = 'Invalid input. Please enter numbers.';
    } else {
        const tip = (subtotal * tippercent) / 100;
        const total = subtotal + tip;
        document.getElementById('totalamount').innerHTML = `Total Amount (including ${tippercent}% tip): $${total.toFixed(2)}`;
    }
}

