const LIKED_RESTAURANTS = 'likedRestaurants'

export const getFromLocalStorage = () => {
    let likedRestaurants = JSON.parse(localStorage.getItem(LIKED_RESTAURANTS))

    if (!likedRestaurants) {
        localStorage.setItem(LIKED_RESTAURANTS, JSON.stringify([]))
        likedRestaurants = JSON.parse(localStorage.getItem(LIKED_RESTAURANTS))
    }

    return likedRestaurants
}

export const likeInLocalStorage = (id) => {
    let rId = Number(id)
    let likedRestaurants = getFromLocalStorage()
    if (likedRestaurants.includes(rId)) {
        likedRestaurants = likedRestaurants.filter(r => r !== rId)
    } else {
        likedRestaurants.push(Number(id))
    }
    localStorage.setItem(LIKED_RESTAURANTS, JSON.stringify(likedRestaurants))
    return likedRestaurants
}