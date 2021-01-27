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

    let plantUl = document.createElement("ul")
    if (plant.comments){
        plant.comments.forEach(comment => {
            let plantComment = document.createElement("li")
            plantComment.innerText = comment.comment
            plantUl.append(plantComment)
            
        })
    }

    plantCard.append(plantName, plantImage, plantSun, plantWater, commentTitle, plantUl)
}

function handleForm(){
    document.querySelector('.ui-form').addEventListener('submit', (event) => {
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

    })

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