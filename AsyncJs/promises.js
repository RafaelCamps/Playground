const posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
];

//Con esta función simulamos la petición de datos a un server
function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.getElementById('main').innerHTML = output
    }, 1000 )
}

//Con esta función simulamos el envío de datos a un servidor
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

//llamamos a la función para recibir datos
getPosts();
//llamamos a la función para enviar datos
//createPost({ id: 3, title: 'New Post' });

//Como la función para crear un post es más lenta, el nuevo post no va a llegar a mostrarse

//Añadiendo el callback a la función createPost, podemos hacer q se muestre

createPost({ id: 3, title: 'New Post' }, getPosts);