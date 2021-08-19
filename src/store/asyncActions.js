import {
    createRestaurantSuccess,
    createRestaurantError,
    setRestaurants,
    setSingleRestaurant,
    editRestaurantSuccess,
    editRestaurantError,
    destroyRestaurant
} from "./actionCreators";

export const getRestaurants = () => {
    return async dispatch => {
        await fetch('http://127.0.0.1:8000/api/restaurants/')
            .then(response => response.json())
            .then(data => dispatch(setRestaurants(data)))
    }
}


export const getSingleRestaurant = (id) => {
    return async dispatch => {
        await fetch('http://127.0.0.1:8000/api/restaurants/' + id)
            .then(response => response.json())
            .then(data => dispatch(setSingleRestaurant(data)))
    }
}


export const postRestaurants = (restaurant) => {
    console.log(restaurant)
    return async dispatch => {
        try {
            await fetch('http://127.0.0.1:8000/api/restaurants/', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(restaurant)
            })
                .then(response => response.json())
                .then(data => dispatch(createRestaurantSuccess(`Ресторан ${data.name} успешно создан.`)))
        } catch (e) {
            dispatch(createRestaurantError('Упс, какая-то ошибочка!'))
        }


    }
}


export const putRestaurant = (restaurant) => {
    return async dispatch => {
        try {
            await fetch(`http://127.0.0.1:8000/api/restaurants/${restaurant.id}/`, {
                method: "put",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(restaurant)
            })
                .then(response => response.json())
                .then(data => dispatch(editRestaurantSuccess(`Ресторан ${data.name} успешно изменен.`)))
        } catch (e) {
            dispatch(editRestaurantError('Упс, не получается!'))
        }
    }
}


export const deleteRestaurant = (id) => {
    return async dispatch => {
        await fetch("http://127.0.0.1:8000/api/restaurants/" + id + "/", {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        })
        dispatch(destroyRestaurant())
    }
}