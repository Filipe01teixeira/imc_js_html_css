function calcular(){
    var altura=Document.getElementyById("altura").value
    var peso=Document.getElementyById("peso").value
    console.log(altura)
    console.log(peso)

    var imc=altura / altura ** 2;
    if(imc<18.5){
        window.alert("Você está magro")
    }
    else if(imc<24.9){
        window.alert("Você está no peso normal")
    }

    else if(imc<29.9){
        window.alert("Você está sobrepeso ")
    }

    else if(imc<39.9){
        window.alert("Você está com obesidade")
    }

    else if(imc>39.9){
        window.alert("Você está com obesidade morbita")
    }
}