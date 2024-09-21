// step 1 add a event handler to the add money button
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();
    
    // input add money value 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)
    // get input pin number
    const inputPinNumber = document.getElementById('input-pin').value;
    console.log(inputPinNumber);

    // verify pin but wrong way
    if(inputPinNumber === '1234'){
        console.log('added money on your account');
        // get the current balance
        const balance = document.getElementById('current-balance').innerText;
        console.log(balance)
        // add addMoneyInput with Balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        console.log(addMoneyNumber,typeof balanceNumber)
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance)
        // Update the balance 
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! Please try again.')
    }
});