// write your code here

fetch ("http://localhost:3000/ramens")
.then(res => res.json())
.then(data => {
    data.forEach(ramen =>{
        ramenImageDisplay(ramen),
        getRamenDetails(ramen)
    })
});

const ramenMenu = document.getElementById("ramen-menu");
const ramenDetails = document.getElementById("ramen-detail");

function ramenImageDisplay(ramen){
    let ramenImage = document.createElement("img");
    ramenImage.src = ramen.image;
    ramenImage.addEventListener("click", ()=> getRamenDetails(ramen));

    ramenMenu.appendChild(ramenImage);
    
}

function getRamenDetails(ramen){
    let ramenImage = document.getElementsByClassName("detail-image")[0];
    let ramenName = document.getElementsByClassName("name")[0];
    let ramenRestaurant = document.getElementsByClassName("restaurant")[0];
    let ramenRating = document.getElementById("rating-display");
    let ramenComment = document.getElementById("comment-display");

    ramenImage.src = ramen.image;
    ramenName.textContent = ramen.name;
    ramenRestaurant.textContent = ramen.restaurant;
    ramenRating.textContent = ramen.rating;
    ramenComment.textContent = ramen.comment;
}

let form = document.getElementById("new-ramen");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    // let name = e.target.children[2].value;
    // let restaurant = e.target.children[4].value;
    // let image = e.target.children[6].value;
    // let rating = e.target.children[8].value;
    // let comment = e.target.children[10].value;

    const newRamen ={
     name: e.target.children[2].value,
     restaurant: e.target.children[4].value,
     image: e.target.children[6].value,
     rating: e.target.children[8].value,
     comment: e.target.children[10].value
    }
    
    getRamenDetails(newRamen);
    ramenImageDisplay(newRamen);

    form.reset();
});
