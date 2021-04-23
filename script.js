var arregloDeNombres = [];

function AgregarNombre(){
    debugger;
    var nombre = document.getElementById("nombre").value;

    if(nombre != ''){
        arregloDeNombres.push(nombre);

        var tabla = document.getElementById("registros"); //BUSCA POR SU ID
           var nuevoRegistro = tabla.insertRow(0); //CREO UNA NUEVA FILA A LA TABLA
           var nuevaColumna = nuevoRegistro.insertCell(0); //CREO UNA NUEVA CELDA A LA FILA
    
            var nuevoNombre = document.createTextNode(nombre); //CREAR UN NUEVO TEXTO PARA HTML
            nuevaColumna.appendChild(nuevoNombre); //EL TEXTO QUE REALICE LO ASIGNE A MI CELDA

        for(var item = 0; item < arregloDeNombres.length; item ++){
            console.log(arregloDeNombres[item] + " tiene la posicion: " + item);
        }

        console.log(arregloDeNombres);

        console.log(arregloDeNombres.indexOf("Erika Hernandez"));
        
    }else{
        alert('Ingrese un nombre');
    }
}

function borrarDatos(){

}


/*var hola = "Hola mundo";
let hello = "hello world"
console.log(hola);
console.log(hello);
console.log(window);
*/

//ambito de bloque
/*var musica ="Rock"
console.log("variable musica antes del bloque",musica);
{
    var musica = "pop";
    console.log("variable musica antes del bloque",musica);
}

console.log("variable musica DESPUES del bloque",musica);
// con LET

let musica2 ="Rock"
console.log("variable musica antes del bloque",musica2);
{
    let musica2 = "pop";
    console.log("variable musica antes del bloque",musica2);
}

console.log("variable musica DESPUES del bloque",musica2);
*/

const PI =3.1416;
console.log(PI);

//conjunto de atributos o llaves con su valor
let objeto = {
    nombre: "Erika",
    edad: 27
}

// arreglo es una colección de datos
/*let colores = ["blanco", "rosado", "verde"];

console.log(objeto);
console.log(colores);

let nombre = "Erika"
let apellido = "Hernandez"
let saludo = new String("Hola Mundo");

console.log(nombre,apellido,saludo);

console.log(
    nombre.length,
    apellido.length,
    saludo.length
);
*/

function saludar(nombre,edad){
    console.log('Hola mi nombre es ${nombre} y tengo ${edad} años');
}
saludar("Ambar",9);
saludar();

const colors = ["black","green","blue","pink","red"];
console.log(colors);

//push = agrega en el ultimo lugar
colors.push("yellow");
console.log(colors);

//pop = quita el ultimo
//colors.pop();
//console.log(colors);


/*
const erika = {
    nombre: "Erika",
    apellido: "Hernandez",
    edad: 27,
    pasatiempos: ["leer","doglover","catlover"],
    contacto:{
    email:"erika@gmail.com",
    movil:"76577899"
    }

    saludar:function(){
        console.log("hola");
    }
}
*/