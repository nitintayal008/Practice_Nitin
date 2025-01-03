const arr = [
 "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
 "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg"
]


const image = document.getElementsByClassName("image");


const firstButton = document.getElementsByClassName("firstButton");
const secondButton = document.getElementsByClassName("secondButton");

firstButton.addEventListener("click", ()=>{
    image.src = ""
})
