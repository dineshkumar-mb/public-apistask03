
//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=50`;
const api_key = "live_YdUqBBeQl56Nk7lSUHdCCPlPllBqe1IBxNISq5v09ZJJiWWnYAQ4jEcJSnZdprWa"

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});