const favoriteUrl = "http://localhost:3000/favorites/"

function loadFavorites() {
    fetch(favoriteUrl)
        .then(res => res.json())
        .then(favorites => favorites.forEach(favorite => renderFavorites(favorite)))
}

function renderFavorites(plant){
    console.log(plant)
}