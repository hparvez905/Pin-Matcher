function getPin() {
    const pin= Math.round(Math.random() * 10000);
    // pin check korte pin k string banay nisi
    const pinString= pin + '';  

    // ekhane check kore pin return korbe;
    if (pinString.length == 4) 
    {                         
        return pin ;
        
    }
    // abar getPin function call korchii jeno 3 digit na ashe;
                            // getPin function call na korle 3 digit ahsteo pare;
                            // so ekhon 3 pin ashte nilei getPin abar call hobe;

    else {
        return getPin() ;  
    }

    
}

function generatePin(){
   const pin=getPin();
    document.getElementById('displayInput').value = pin;
}

// pin generate ends 

document.getElementById('keyPad').addEventListener('click',function (event) {
    const digit=event.target.innerText;
    const displayNumber = document.getElementById('typedNumber');               

    if (isNaN(digit)) {                                                     // NOTANUMBER CHECK;
        if (digit == 'C') {                                                 // C button e click korle clear kora;
            displayNumber.value ='';
            
        }
        
        
    }
    else{
        const previousNumber=displayNumber.value;                              // number hole seta display kora;
        const newNumber= previousNumber + digit;
        displayNumber.value=newNumber;

    }
        
    
})

function verifyPin() {
    const generatePin = document.getElementById('displayInput').value;
    const displayNumber =document.getElementById('typedNumber').value;                              // pin verify kora;
    const pinMacthed =document.getElementById('notify-matched');
    const notifyFail = document.getElementById('notify-fail');
    if (generatePin == displayNumber) {
       
        pinMacthed.style.display ='block';                                                  // pin match hole success shoe korbe;
        notifyFail.style.display = 'none';                                                    // r fail display korbe nah;
        
    }
    else{

        pinMacthed.style.display ='none';
        notifyFail.style.display = 'block'; 
    }
    
    
}