// Declaración de variables constantes globales
const texto_ingresado = document.getElementById('texto_ingresado');
const texto_resultado = document.getElementById('texto_resultado');
const div_vacio = document.getElementById('vacio');
const div_resultado = document.getElementById('contenido');

div_resultado.style.display = "none";

// Funcion para encriptar el texto ingresado
function Encriptar(){
    //Verificamos la cadena de entrada
    Vacio();

    //Verificamos si el texto ingresado es con minusculas
    if(texto_ingresado.value == texto_ingresado.value.toLowerCase()){
        //Obtenemos el texto ingresado
        let texto = texto_ingresado.value;

        //Declaramos la variable de salida
        let salida = "";

        //Recorremos el texto ingresado
        for(let i = 0; i < texto.length; i++){
            switch(texto[i]){
                case "a":
                    salida+= "ai";
                    break;
                case "e":
                    salida+= "enter";
                    break;
                case "i":
                    salida+= "imes";
                    break;
                case "o":
                    salida+= "ober";
                    break;
                case "u":
                    salida+= "ufat";
                    break;
                default:
                    salida+= texto[i];
                    break;
            }
        }
        console.log(salida);
        //Mostramos el resultado
        texto_resultado.value = salida;

    }else{
        alert("El texto ingresado debe ser en minusculas");
    }

}

// Funcion para desencriptar el texto ingresado
function Desencriptar(){
    //Verificamos la cadena de entrada
    Vacio();

    //Obtenemos el texto ingresado
    let texto = texto_ingresado.value;

    if(texto_ingresado.value == texto_ingresado.value.toLowerCase()){
        //Obtenemos el texto ingresado
        let texto = texto_ingresado.value;

        // Reemplazamos las letras
        let salida = texto.replaceAll(/ai/g, "a").replaceAll(/enter/g, "e").replaceAll(/imes/g, "i").replaceAll(/ober/g, "o").replaceAll(/ufat/g, "u");

        //Mostramos el resultado
        texto_resultado.value = salida;
    }else{
        alert("El texto ingresado debe ser en minusculas");
    }
}

// Funcion para validar si la cadena de entrada no este vacia
function Vacio(){
    if(texto_ingresado.value === ""){
        console.log("zi")
        div_vacio.style.display = "block";
        div_resultado.style.display = "none";
    }else{
        div_vacio.style.display = "none";
        div_resultado.style.display = "block";
    }
}

function Copiar(){
    texto_resultado.select();
    document.execCommand('copy');
}