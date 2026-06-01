
//Nombrar variables del botón y los elementos para mostrar
const boton = document.getElementById(`btnDatos`);
const nombre = document.getElementById(`nombre`);
const email = document.getElementById(`email`);
const telefono = document.getElementById(`telefono`);

//Evento al click
boton.addEventListener(`click`, () => {
    const url = `https://jsonplaceholder.typicode.com/users/1`

    //Consumir la API con fetch
    fetch(url)
    .then(response => response.json()) //Convertir la respuesta a JSON
    .then(data => {
        //Mostrar los dato en el HTML
        nombre.innerText = `Nombre: ${data.name}`;
        email.innerText =`Email: ${data.email}`;
        telefono.innerText = `Teléfono: ${data.phone}`;

        console.log(data); //para ver lo que trae la API
    })
    .catch(error => console.error(`Error al obtener datos: `, error));
}
)
