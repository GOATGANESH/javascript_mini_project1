let body=document.body;
let buttons=document.querySelectorAll('.box');


buttons.forEach( (button) =>{
    button.addEventListener('click', (e)=>{
        switch (e.target.id) {
            case 'yellow':
                body.style.backgroundColor='yellow';
                break;
            case 'red':
                body.style.backgroundColor='red';
                break;
            case 'aquamarine':
                body.style.backgroundColor='aquamarine';
                break;
            case 'orange':
                body.style.backgroundColor='orange';
                break;
        
            default:alert('Invalid');
                break;
        }
    })
})