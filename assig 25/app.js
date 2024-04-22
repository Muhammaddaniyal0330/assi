var display = document.getElementById('display')


function appendToDisplay(input){
    display.value += input;
}

function clearItem(){
    display.value = ' ';
}

function calculateVal(){
   
    try{
        display.value = eval(display.value)

    }

    catch(error){
        display.value = 'Error'
    }
}


clearItem()