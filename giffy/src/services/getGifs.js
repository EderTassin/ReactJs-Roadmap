
const apiKey = 'ffjETuedmAZ2vZQzYwUzaadLgKH0Etod';


export default function getGifd({ keyword = 'rick' } = {}) {

  const apiURL =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response;
      const gifs = data.map(image => {
        const {images, title, id} = image;
        const {url} = images.original;
        return { title, id, url };
      }); 
      return gifs;
    });

}