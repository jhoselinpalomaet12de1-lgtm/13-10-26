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
 
    document.getElementById("estatura").value = ""
    document.getElementById("edad").value = ""
        document.getElementById("nombre").value = ""
            document.getElementById("apellido").value = ""
    
}

function mostrar(){
    var texto = ""; 
    
 for (var i = 0; i < personaVector.length; i++) {
        texto += "Nombre: " + personaVector[i].nombre + "<br>";
        texto += "Apellido: " + personaVector[i].apellido + "<br>";
        texto += "Edad: " + personaVector[i].edad + "<br>";
        texto += "Estatura: " + personaVector[i].estatura + "<br><br>";
    }

    document.getElementById("resultado").innerHTML = texto;
}
