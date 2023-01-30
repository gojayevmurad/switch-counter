const display = document.querySelector('span')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const  decrease = document.querySelector('.decrease')


const buttons = [reset, increase, decrease];


let value = 0;


buttons.forEach(button => button.addEventListener('click',(e)=>{

    switch (e.target.value){
        case '+':
            value+=1;
            break;
        case '-':
            value-=1;
            break;
        default:
            value = 0;
    }

    if(value>0){
        display.style.color = 'green'
    }else if(value == 0){
        display.style.color = 'black'
    }else{
        display.style.color = 'red'
    }

    display.innerHTML = value;
    
}));
