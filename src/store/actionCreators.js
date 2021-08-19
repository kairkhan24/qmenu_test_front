import {
    CHANGE_AVERAGE_CHECK,
    CHANGE_AVERAGE_DELIVERY_TIME,
    CHANGE_NAME, CLEAR_INPUTS,
    CREATE_RESTAURANT_ERROR,
    CREATE_RESTAURANT_SUCCESS,
    DESTROY_RESTAURANT,
    EDIT_RESTAURANT_ERROR,
    EDIT_RESTAURANT_SUCCESS, GET_LIKED_RESTAURANTS, LIKE_RESTAURANT, OFF_REDIRECT,
    SET_RESTAURANTS,
    SET_SINGLE_RESTAURANT
} from "./reducers/restaurantReducer";


export const changeName = (payload) => ({type: CHANGE_NAME, payload})
export const changeAverageCheck = (payload) => ({type: CHANGE_AVERAGE_CHECK, payload})
export const changeAverageDeliveryTime = (payload) => ({type: CHANGE_AVERAGE_DELIVERY_TIME, payload})

export const setRestaurants = (payload) => ({type: SET_RESTAURANTS, payload})
export const setSingleRestaurant = (payload) => ({type: SET_SINGLE_RESTAURANT, payload})

export const createRestaurantSuccess = (payload) => ({type: CREATE_RESTAURANT_SUCCESS, payload})
export const createRestaurantError = (payload) => ({type: CREATE_RESTAURANT_ERROR, payload})

export const editRestaurantSuccess = (payload) => ({type: EDIT_RESTAURANT_SUCCESS, payload})
export const editRestaurantError = (payload) => ({type: EDIT_RESTAURANT_ERROR, payload})

export const destroyRestaurant = () => ({type: DESTROY_RESTAURANT})

export const offRedirect = () => ({type:OFF_REDIRECT})

export const getLikedRestaurants = () => ({type: GET_LIKED_RESTAURANTS})
export const likeRestaurant = (payload) => ({type:LIKE_RESTAURANT, payload})

export const clearInputs = () => ({type: CLEAR_INPUTS})