// let addPlant = true;

document.addEventListener('DOMContentLoaded', function(){
    //call everything that we want to show IMMEDIATELY
    
    const addBtn = document.querySelector("#new-plant-btn");
    const plantFormDiv = document.querySelector(".form-group");
    const plantFavDiv = document.querySelector(".favorites");

    
    let formContainer = document.querySelector("#form-container")
    
    addBtn.addEventListener("click", () => {
        formContainer.classList.toggle("hidden")
        // hide & seek with the form
        // addPlant = !addPlant;
        // if (addPlant) {
        //     plantFormDiv.style.display = "block";
        //     plantFavDiv.style.display = "block";

        // } else {
        //     plantFormDiv.style.display = "none";
        //     plantFavDiv.style.display = "none";
        }
    );
    loadPlants()
    loadFavorites()
    createForm()
    
})







// document.addEventListener('DOMContentLoaded', function(){
//     console.log('DOM is loaded')
//     console.log('This app Bootstrap for styling')
//     init()
//   })
  
  
// function init(){
//     loadCats()  
//cat.js 
    
//     renderHobbies()
//hobby.js

//     handleSubmit()
//index.js
//   }