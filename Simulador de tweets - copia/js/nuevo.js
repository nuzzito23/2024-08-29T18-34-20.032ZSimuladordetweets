const formulario = document.getElementById('formulario');
const lista_tweets = document.getElementById('lista-tweets');

const limite = 25;

//funcion notificaciones para cuando queramos mostrar un mensaje
function notificaciones(texto) {
    const notificacion = document.getElementById('textoVal');
    var mensaje = document.createElement('span');
    mensaje.textContent = texto;
    mensaje.classList.add('error');

    notificacion.appendChild(mensaje)

    //esto se usa para determinar cada cuanto se ejecuta una funcion
    setTimeout(function(){
        mensaje.remove();
    }, 3000)

}

// Funcion para agregar tweet
function agregarTweet(event) {
    event.preventDefault() //se usa para eliminar el evento por defecto de recargar la pagina
    const tweet = document.getElementById('tweet');

    if (tweet.value != '') {
    if (tweet.value.length <= limite) {
        lista_tweets.innerHTML += `
        <div>
            ${tweet.value}
        </div>    
    `;
    tweet.value = ''; // esto es para una vez escrito y enviado el tweet se vacie el espacio de texto
    // lista_tweets.innerHTML += "<div>" + tweet + "</div>" es otra forma de hacer que pueda enviar los tweets
    } else {
        //
        notificaciones('El tweet no puede tener mas de ' + limite + " caracteres")
    }
} else {
    //
    notificaciones('El tweet no puede estar vacio')
}

}
formulario.addEventListener('submit', agregarTweet)