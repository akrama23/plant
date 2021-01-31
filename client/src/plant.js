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

    let plantName = document.createElement("h3")
    plantName.className = "card-title"
    plantName.innerText = plant.name

    let plantImage = document.createElement("img")
    plantImage.className = "card-img-top"
    plantImage.src = plant.image


    let plantSun = document.createElement("h3")
    plantSun.className = "font-weight-bold"
    plantSun.innerText = `Sun preference: ${plant.sun}`

    let plantWater = document.createElement("h3")
    plantWater.innerText = `Water Schedule: ${plant.water}`

    let commentTitle = document.createElement("h4")
    commentTitle.innerText = `Comments -`

    let editButton = document.createElement("button")
        editButton.classList.add("btn","btn-outline-dark")
        editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg>`
        editButton.innerText = "EDIT"
        editButton.addEventListener("click", (event) => {
            event.preventDefault()
            editPlant(plant, event)
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
    let uiForm = document.querySelector('#form')
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
function editPlant(plant, event){
    // console.log(event.target.parentNode)
    // let editForm = document.querySelector('.ui-form')
    //     editForm.name.value = plant.name 
    //     editForm.image.value = plant.image
    //     editForm.sun.value = plant.sun 
    //     editForm.water.value = plant.water 

  
    //     editForm.addEventListener("submit", (event) => {
    //         event.preventDefault
    //         submitEdit(event, plant)

    //     })
//     <form class="ui-form">
//     <div class="form-group" id="form">
//       <h3>Add a New Plant</h3>
//       <input name="name" class="form-control mb-2" type="text" value="" placeholder="Enter Plant Name Here..." >
//       <input name="image" class="form-control mb-2" type="text" value="" placeholder="Enter Image URL Here...">
//       <input name="sun" class="form-control mb-2" type="text" value="" placeholder="Enter Sun Preference Here...">
//       <input name="water" class="form-control mb-2" type="text" value="" placeholder="Enter Water Schedule Here...">
//       <input class="btn btn-primary" type="submit">
//     </div>
//   </form>

    let editForm = document.createElement("form")
        editForm.className = "ui-form"


    let formDiv = document.createElement("div")
        formDiv.className = "form-group"
    let editName = document.createElement("input")
        editName.name = "name"
        editName.className = "form-control mb-2"
        editName.type = "text"
        editName.value = plant.name

    let editImage = document.createElement("input")
        editImage.className = "form-control mb-2"
        editImage.name = "image"
        editImage.type = "text"
        editImage.value = plant.image

    let editSun = document.createElement("input")
        editSun.className = "form-control mb-2"
        editSun.name = "sun"
        editSun.type = "text"
        editSun.value = plant.sun

    let editWater = document.createElement("input")
        editWater.className = "form-control mb-2"
        editWater.name = "water"
        editWater.type = "text"
        editWater.value = plant.water

    let btn = document.createElement("input")
        btn.className = "btn btn-outline-dark"
        btn.type = "submit"

        formDiv.append(editName, editImage, editSun, editWater, btn)
        editForm.append(formDiv)

        document.querySelector("#topRight").innerHTML = ""
        document.querySelector("#topRight").append(editForm)

        editForm.addEventListener("submit", (event) => {
            event.preventDefault()
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
    console.log(updatedPlant)
   
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

