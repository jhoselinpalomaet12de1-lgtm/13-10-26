var personaVector= [];

function agregar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var estatura = document.getElementById("estatura").value;

    var persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        estatura: estatura
        
    };   

    
    personaVector.push(persona);

     console.log(personaVector);
    
}