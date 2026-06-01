function generarDatos(frase, autor){

    const contenedorPosts = document.querySelector('#post')

    const listarObjetos = document.createElement('ul')

    const items = document.createElement('li')


    // texto
    items.textContent = `${frase} / ${autor}`


    // agregar elementos
    listarObjetos.appendChild(items)


    contenedorPosts.appendChild(listarObjetos)
}


fetch('https://dummyjson.com/quotes/random')

.then(response => response.json())

.then(datos => {

    generarDatos(
        datos.quote,
        datos.author
    )

})

.catch(error => console.log(error))


const boton = document.querySelector('#btnGenerar')

boton.addEventListener('click', generarDatos)
