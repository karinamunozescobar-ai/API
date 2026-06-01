
//Nombrar variables del botón y los elementos para mostrar
const boton = document.getElementById(`btnPersonaje`);
const nombre = document.getElementById(`nombre`);
const imagen = document.getElementById(`imagen`);
const estado = document.getElementById(`estado`);

//Evento al click
boton.addEventListener(`click`, () => {
    const url = `https://rickandmortyapi.com/api/character/1`

    //Consumir la API con fetch
    fetch(url)
    .then(response => response.json()) //Convertir la respuesta a JSON
    .then(data => {
        //Mostrar los dato en el HTML
        nombre.innerText = `Nombre: ${data.name}`;
        imagen.src = data.image;
        imagen.style.display = `block` //para mostrar la imagen
        estado.innerText = `Estado: ${data.status}`;

        console.log(data); //para ver lo que trae la API
    })
    .catch(error => console.error(`Error al obtener datos: `, error));
}
)
