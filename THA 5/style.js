var addEventListner;
let display = document.getElementById('display');
let displayValue=''
buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('button text=',buttonText);
         if(buttonText=="C"){
            displayValue =' ';
            display.value=displayValue;
        }
        else if(buttonText=="="){
            display.value=eval(displayValue)
        }
        else{
            displayValue += buttonText;
            display.value = displayValue;
        }
    }
    )
    
}

