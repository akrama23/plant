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
    plantSun.innerText = `Sun preference: ${plant.sun}`

    let plantWater = document.createElement("h3")
    plantWater.innerText = `Water Schedule: ${plant.water}`

    let commentTitle = document.createElement("h4")
    commentTitle.innerText = `Comments -`

    let button = document.createElement("button")
        button.classList.add("btn","btn-primary")
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>`
        
        button.addEventListener("click", (event) => {
            removePlant(event, plant.id)
        })
    let plantUl = document.createElement("ul")
    if (plant.comments){
        plant.comments.forEach(comment => {
            let plantComment = document.createElement("li")
            plantComment.innerText = comment.comment
            plantUl.append(plantComment)
            
        })
    }

    plantCard.append(plantName, plantImage, plantSun, plantWater, commentTitle, plantUl, button)
}

function createForm(){
    let uiForm = document.querySelector('.ui-form')
        uiForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newPlant = {
            name: event.target.name.value,
            image: event.target.image.value,
            sun: event.target.sun.value,
            water: event.target.water.value,
        }

        fetch(plantUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPlant)
        })
        .then(r => r.json())
        .then(renderPlants)
        uiForm.reset()
    })

}

function removePlant(event, plantId){
    console.log(event, plantId)
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