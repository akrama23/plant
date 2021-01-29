const plantUrl = "http://localhost:3000/plants/"





function loadPlants() {

    fetch(plantUrl)
        .then(res => res.json())
        .then(plants => plants.forEach(plant => renderPlants(plant)))
}

function renderPlants(plant){


    let plantContainer = document.querySelector("#plant-container")
    let plantCard = document.createElement('div')
    plantCard.id = `plant-${plant.id}`
    plantCard.className = "card"
    plantCard.style = "width: 18rem;"
    plantContainer.appendChild(plantCard)

    let plantName = document.createElement("h2")
    plantName.className = "card-title"
    plantName.innerText = plant.name

    let plantImage = document.createElement("img")
    plantImage.className = "card-img-top"
    plantImage.src = plant.image


    let plantSun = document.createElement("h3")
    plantSun.innerText = `Sun preference: ${plant.sun}`

    let plantWater = document.createElement("h3")
    plantWater.innerText = `Water Schedule: ${plant.water}`

    let commentTitle = document.createElement("h4")
    commentTitle.innerText = `Comments -`

    let editButton = document.createElement("button")
        editButton.classList.add("btn","btn-outline-dark")
        editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg>`
        editButton.innerText = "Edit"
        editButton.addEventListener("click", () => {
            editPlant(plant)
        })

    let removeButton = document.createElement("button")
        removeButton.classList.add("btn","btn-outline-dark")
        removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>`
        
        removeButton.addEventListener("click", () => {
            removePlant(plant)
        })
    let plantUl = document.createElement("ul")
    if (plant.comments){
        plant.comments.forEach(comment => {
            let plantComment = document.createElement("li")
            plantComment.innerText = comment.comment
            plantUl.append(plantComment)
            
        })
    }

    plantCard.append(plantName, plantImage, plantSun, plantWater, commentTitle, plantUl, editButton, removeButton)
}

function createForm(){
    let uiForm = document.querySelector('.ui-form')
        uiForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newPlant = {
            name: event.target.name.value,
            image: event.target.image.value,
            sun: event.target.sun.value,
            water: event.target.water.value
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
function editPlant(plant){
    let editForm = document.querySelector('.ui-form')
        editForm.name.value = plant.name 
        editForm.image.value = plant.image
        editForm.sun.value = plant.sun 
        editForm.water.value = plant.water 

  
        editForm.addEventListener("submit", (event) => {
            event.preventDefault
            submitEdit(event, plant)

        })



}

function submitEdit(event, plant){

    let updatedPlant = {
        name: event.target.name.value,
        image: event.target.image.value,
        sun: event.target.sun.value,
        water: event.target.water.value
    }
        let reqPack = {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify(updatedPlant)
    }
    fetch(plantUrl + plant.id, reqPack)
        .then(res => res.json())
        .then(renderPlants)

}


function removePlant(plant){
    
    let id =  plant.id
    fetch(plantUrl + id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
    .then( response => response.json())
    //what are we doing AFTER we delete on server
    .then(data => erasePlant(id))
    // document.querySelector('.card').innerHTML = ""
    
}

function erasePlant(id){
    console.log(id)
    let card = document.querySelector(`#plant-${id}`)
    card.remove()
}

