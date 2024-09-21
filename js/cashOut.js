
document.getElementById('btn-cash-out').addEventListener('click',function(event){
    console.log('button clicked')
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    console.log(cashOut, pinNumber)

    // wrong way to verify pin
    if(pinNumber === '1234'){
        const balance = document.getElementById('current-balance').innerText;
        console.log(balance)     
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out. Please try again');
    }
})