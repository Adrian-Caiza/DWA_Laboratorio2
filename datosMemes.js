const obtenerMemes = async () => {

    const memesContainers = document.getElementById('list-memes');
    const memeTemplate = document.getElementById('meme'); 

    const request = await fetch("https://api.imgflip.com/get_memes"); 

    const respuesta = await request.json();

    respuesta.data.memes.slice(0, 8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url; 
        memesContainers.appendChild(newMemeCard);
    });
    memeTemplate.remove();
};
obtenerMemes();

const obtenerGif= async () => {
    const gifsContainers = document.getElementById('list-gifs');
    const gifTemplate = document.getElementById('gif'); 

    const request = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=Goku"); 

    const respuesta = await request.json();

    respuesta.data.slice(0, 8).forEach(gif => {
        const newGifCard = gifTemplate.cloneNode(true);
        const img = newGifCard.querySelector('img');
        img.src = gif.images.original.url; 
        gifsContainers.appendChild(newGifCard);
    });
    gifTemplate.remove();
}
obtenerGif();

