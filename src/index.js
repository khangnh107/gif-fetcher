import "./index.css";

const GIPHY_API_KEY = "Qoi3J7bk4JupAGlMYCzH6wk1m7eEKTz7";

async function getGifUrl(searchString) {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${searchString}`, {mode: 'cors'});
  const gifData = await response.json();
  return gifData.data.images.original.url;
}

document.querySelector(".search-button").addEventListener("click", (e) => {
  e.preventDefault();

  const searchString = document.querySelector(".search-bar").value;
  console.log(searchString);

  getGifUrl(searchString).then((data) => {
    console.log(data);
    document.querySelector(".gif").src = data;
  });
});