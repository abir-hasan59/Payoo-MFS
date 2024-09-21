// step - 1 add event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    // step 2 prevent default problem (reloading default browser)
    event.preventDefault();
    console.log('button clicked')
    // step 3 get the phone number and pin Number
    const phoneNumber = document.getElementById('phone-num').value;
    const pinNumber = document.getElementById('pin-num').value;
    // console.log(phoneNumber,pinNumber)
    // wrong way to verify
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are login')
        window.location.href = '/home.html';
    }
    else(
        alert('Wrong phone number or pin')
    )
})
