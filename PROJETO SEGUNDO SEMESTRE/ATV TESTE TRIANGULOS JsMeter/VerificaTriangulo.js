// Lógica para verificar se os lados informados formam um triângulo.
//| b - c | < a < b + c
//| a - c | < b < a + c
//| a - b | < c < a + b 

// Para tirar a raiz quadrada de uma exponenciação
//modulo = Math.sqrt(Math.pow(numero,2));

//Modulo do numero
//Math.abs(numero)

var VerificaTriangulo = require("./VerificaTriangulo");

// Triangulo de qualquer tipo utilizando "modulo = Math.abs(numero);"
exports.FormaTrianguloUsandoABS = function(lado1, lado2, lado3){
    if (Math.abs(lado2 - lado3) < lado1 && lado1 < (lado2 + lado3)){
        return true;  
    } else if (Math.abs(lado3 - lado1) < lado2 && lado2 < (lado1 + lado3)){
        return true;
    } else if(Math.abs(lado1 - lado2) < lado3 && lado3 < (lado1 + lado2)){
        return true;        
    } else {
        return false;    
    }
}

// Triangulo de qualquer tipo utilizando "modulo = Math.sqrt(pow(numero,2));"
exports.FormaTrianguloUsandoSQRTePOW = function(lado1, lado2, lado3){
    if (Math.sqrt(Math.pow((lado2 - lado3),2)) < lado1 && lado1 < (lado2 + lado3)){
        return true;  
    } else if (Math.sqrt(Math.pow((lado3 - lado1),2)) < lado2 && lado2 < (lado1 + lado3)){
        return true;
    } else if(Math.sqrt(Math.pow((lado1 - lado2),2)) < lado3 && lado3 < (lado1 + lado2)){
        return true;        
    } else {
        return false;    
    }
}


// Triangulo com todos os lados iguais
exports.FormaEquilatero = function(lado1, lado2, lado3){
    if (lado1 == lado2 && lado1 == lado3){
        return true;
    } else {
        return false;
    }
}

// Triangulo com lados diferentes
exports.FormaEscaleno = function(lado1, lado2, lado3){
    if ( VerificaTriangulo.FormaTriangulo(lado1, lado2, lado3) == true){
        if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
            return true;
        }
        } else {
        return false;
    }
}

// Triangulo com dois lados iguais
exports.FormaIsosceles = function(lado1, lado2, lado3){
    if ( VerificaTriangulo.FormaTriangulo(lado1, lado2, lado3) == true){
        if ( VerificaTriangulo.FormaEquilatero(lado1,lado2,lado3) != true 
             && VerificaTriangulo.FormaEscaleno(lado1,lado2,lado3) != true){
            return true;        
        }
        } else {
        return false;
    }    
}