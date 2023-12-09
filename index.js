
function calculoimc(){
    let altura = document.querySelector('#input-altura').value;
    let peso = document.querySelector('#input-peso').value;
    let imc = peso / altura;
    document.querySelector('.a-resultado').innerHTML = imc;
};

