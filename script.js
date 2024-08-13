
let btnLlenar = document.getElementById('btnTraer').addEventListener('click', () => { api() })

const api = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.forEach(element => {
            crearLista(element);
        });
    } catch (error) {
        console.error('Falla en Catch', error);
    }
}

function crearLista(element) {
    const lista = document.getElementById('listado')
    let listaHTML = `
        <li><b>${element.title}</b></li>
        <p>${element.body}</p>
    `
    lista.innerHTML += listaHTML

}