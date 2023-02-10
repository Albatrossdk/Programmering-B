console.log('hejsa')
let naturDiv = document.querySelector('#naturkrafter')
let h2Div = document.querySelector('#naturkrafter h2')
naturDiv.style.top = '0vh';

h2Div.addEventListener('click', ()=>{
    if(naturDiv.style.top == '90vh'){
        naturDiv.style.top = 0;
    }else{
        naturDiv.style.top = '90vh';
    }
})

document.querySelector('#submitH').addEventListener('click',()=>{
    fetch('http://localhost:6969/api/naturkrafter')
        .then(res => res.json())
            .then(json => document.querySelector('#naturkrafter .json').innerHTML = JSON.stringify(json))
})