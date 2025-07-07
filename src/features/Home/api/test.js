fetch("https://api-berita-indonesia.vercel.app/cnn/terbaru")
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)))
  .catch((error) => console.error("Error:", error));
