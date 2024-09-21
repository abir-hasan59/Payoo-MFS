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
});