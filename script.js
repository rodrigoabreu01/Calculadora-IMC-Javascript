
function calculoimc(){
    let altura = parseInt(document.querySelector('#input-altura').value);
    let peso = parseInt(document.querySelector('#input-peso').value);
    let imc = (peso / altura).toFixed(2);
    
   document.querySelector('.a-resultado').innerHTML = imc;
};

function limpar(){
    document.querySelector('.a-resultado').innerHTML = "";
}
