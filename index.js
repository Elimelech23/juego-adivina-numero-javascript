var aleatorio = Math.floor(Math.random() * 21);

function adivinar(){
    let numero = document.getElementById("adivinar").value
    if( numero == aleatorio){
        document.getElementById("numero").innerHTML= "Felicidades! Ganastes";
        addEventListener('click', _=> {
            location.reload();
        })
    } else if (numero < aleatorio){
        document.getElementById("numero").innerHTML= "Intente con un numero mayor";
    } else {
        document.getElementById("numero").innerHTML= "Intente con un numero menor";
    }
}


var aleatorio2 = Math.floor(Math.random() * 51);

function adivinar2(){
    let numero2 = document.getElementById("adivinar2").value
    if( numero2 == aleatorio2){
        document.getElementById("numero2").innerHTML= "Felicidades! Ganastes";
        addEventListener('click', _=> {
            location.reload();
        })
    } else if (numero2 < aleatorio2){
        document.getElementById("numero2").innerHTML= "Intente con un numero mayor";
    } else {
        document.getElementById("numero2").innerHTML= "Intente con un numero menor";
    }
}

var aleatorio3 = Math.floor(Math.random() * 101);

function adivinar3(){
    let numero3 = document.getElementById("adivinar3").value
    if( numero3 == aleatorio3){
        document.getElementById("numero3").innerHTML= "Felicidades! Ganastes";
        addEventListener('click', _=> {
            location.reload();
        })
    } else if (numero3 < aleatorio3){
        document.getElementById("numero3").innerHTML= "Intente con un numero mayor";
    } else {
        document.getElementById("numero3").innerHTML= "Intente con un numero menor";
    }
}