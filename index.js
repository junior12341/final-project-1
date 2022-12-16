function get_random_dog_image(){

url = "https://dog.ceo/api/breeds/image/random";

fetch(url)
.then(function(response){
    console.log(response.json)
})
}