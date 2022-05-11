

function resultadoIMC(){

    let resultado = document.getElementById('resultado')
    const peso = (document.getElementById('infopeso').value)
    const altura = (document.getElementById('infoaltura').value)
    const IMC = (peso / (altura * altura))*10000
    event.preventDefault();

    if (IMC >= 0.00 && IMC <= 18.49){
        

    resultado.innerText = "pinto magrinho" 

    } else if (IMC >= 18.50 && IMC <= 24.99 ){
        
        resultado.innerText = "pinto magro"

    } else if (IMC >= 25.0 && IMC <= 29.99){

        resultado.innerText = "pinto mais ou menos"

    } else if (IMC >= 30.0 && IMC <= 39.99){

        resultado.innerText = "pinto gordinho"

    } else if (IMC >= 40){

        resultado.innerText = "pinto gordasso"

    } else{

        resultado.innerText = "deu erro ai mongol"

    }
}

document.addEventListener('submit', resultadoIMC)