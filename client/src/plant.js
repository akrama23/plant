const plantUrl = "http://localhost:3000/plants/"

function loadPlants() {
    fetch(plantUrl)
        .then(res => res.json())
        .then(plants => plants.forEach(plant => renderPlants(plant)))
}

function renderPlants(plant){
    let plantContainer = document.querySelector("#plant-container")
    let plantCard = document.createElement('div')
    plantCard.className = "card"
    plantContainer.appendChild(plantCard)

    let plantName = document.createElement("h2")
    plantName.innerText = plant.name

    let plantImage = document.createElement("img")
    plantImage.src = plant.image

    let plantSun = document.createElement("h3")
    plantSun.innerText = plant.sun

    let plantWater = document.createElement("h3")
    plantWater.innerText = plant.water


    // plant.comments.forEach(comment => {
    //     // let plantComment = document.createElement("p")
    //     // plantComment.innerText = comment
        
    // })

    plantCard.append(plantName, plantImage, plantSun, plantWater)


}

    // Iterate over the reviews
    //  For each review, make a new li, update that li
    //  with the review text, and then, append that to the ul
    // let reviewBox = document.querySelector(".reviews")
    //     reviewBox.innerHTML = ""
    // beer.reviews.forEach(review => {
    //     let newLi = document.createElement('li')
    //     newLi.innerText = review
    //     document.querySelector(".reviews").appendChild(newLi) 
    // }) 