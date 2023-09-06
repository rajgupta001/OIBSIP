let i1 = document.getElementById('calci');
let buttons = document.querySelectorAll('button');

let s1 = "";
let a1 = Array.from(buttons);
a1.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            s1 = eval(s1);
            i1.value = s1;
        }

        else if(e.target.innerHTML == 'AC'){
            s1 = "";
            i1.value = s1;
        }
        else if(e.target.innerHTML == 'DEL'){
            s1 = s1.substring(0, s1.length-1);
            i1.value = s1;
        }
        else{
            s1 = s1 + e.target.innerHTML;
            i1.value = s1;
        }
        
    })
})