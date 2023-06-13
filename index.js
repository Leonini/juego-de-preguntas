let INDEX_PREGUNTA = 0 



cargarPregunta(INDEX_PREGUNTA)


function cargarPregunta(index){
    objetoPregunta = baseDePreguntas[index]

    opciones = [...objetoPregunta.distractores]
    opciones.push(objetoPregunta.respuesta)

    opciones.sort(() => Math.random() - 0.5);
    
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("imagen").src = objetoPregunta.imagen

    document.getElementById("opcion-1").innerHTML = opciones[0]
    document.getElementById("opcion-2").innerHTML = opciones[1]
    document.getElementById("opcion-3").innerHTML = opciones[2]
    document.getElementById("opcion-4").innerHTML = opciones[3]
}

async function seleccionarOpción(index) {
    let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
    if (validezRespuesta) {
        await Swal.fire({
            title:"Respuesta correcta",
            text:"La respuesta ha sido correcta",
            icon: "success",
        });
    } else {
        await Swal.fire({
            title:"Respuesta incorrecta",
            text:`La respuesta correcta es ${objetoPregunta.respuesta}`,
            icon: "error",
        });
    }
    INDEX_PREGUNTA++;
    if (INDEX_PREGUNTA>=baseDePreguntas.length) {
        INDEX_PREGUNTA = 0;
        await Swal.fire({
            title:"¡Juego Terminado!",
            text:"Gracias por jugar.",
            icon: "info",
        });
    } 

    cargarPregunta(INDEX_PREGUNTA);

}