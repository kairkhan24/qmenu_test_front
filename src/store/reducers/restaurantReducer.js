import {getFromLocalStorage, likeInLocalStorage} from "../localStorage";

const initialState = {
    restaurants: [],
    likedRestaurants: [],
    inputName: "",
    inputAverageCheck: 0,
    inputAverageDeliveryTime: 0,
    success: null,
    error: null,
    redirect: false

}

export const CHANGE_NAME = "CHANGE_NEW_NAME"
export const CHANGE_AVERAGE_CHECK = "CHANGE_AVERAGE_CHECK"
export const CHANGE_AVERAGE_DELIVERY_TIME = "CHANGE_AVERAGE_DELIVERY_TIME"

export const SET_RESTAURANTS = "SET_RESTAURANTS"
export const SET_SINGLE_RESTAURANT = "SET_SINGLE_RESTAURANT"

export const CREATE_RESTAURANT_SUCCESS = "CREATE_RESTAURANT_SUCCESS"
export const CREATE_RESTAURANT_ERROR = "CREATE_RESTAURANT_ERROR"

export const EDIT_RESTAURANT_SUCCESS = "EDIT_RESTAURANT_SUCCESS"
export const EDIT_RESTAURANT_ERROR = "EDIT_RESTAURANT_ERROR"

export const DESTROY_RESTAURANT = "DESTROY_RESTAURANT"

export const OFF_REDIRECT = "OFF_REDIRECT"

export const GET_LIKED_RESTAURANTS = "GET_LIKED_RESTAURANTS"
export const LIKE_RESTAURANT = "LIKE_RESTAURANT"

export const CLEAR_INPUTS = "CLEAR_INPUTS"

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, inputName: action.payload}
        case CHANGE_AVERAGE_CHECK:
            return {...state, inputAverageCheck: action.payload}
        case CHANGE_AVERAGE_DELIVERY_TIME:
            return {...state, inputAverageDeliveryTime: action.payload}
        case SET_RESTAURANTS:
            return {...state, restaurants: action.payload}
        case SET_SINGLE_RESTAURANT:
            return {...state, restaurants: [...state.restaurants, action.payload]}
        case CREATE_RESTAURANT_SUCCESS:
            return {...state, success: action.payload, error: null}
        case CREATE_RESTAURANT_ERROR:
            return {...state, success: null, error: action.payload}
        case EDIT_RESTAURANT_SUCCESS:
            return {...state, success: action.payload, error: null}
        case EDIT_RESTAURANT_ERROR:
            return {...state, success: null, error: action.payload}
        case DESTROY_RESTAURANT:
            return {...state, redirect: true}
        case OFF_REDIRECT:
            return {...state, redirect: false}
        case GET_LIKED_RESTAURANTS:
            return {...state, likedRestaurants: getFromLocalStorage()}
        case LIKE_RESTAURANT:
            return {...state, likedRestaurants: likeInLocalStorage(action.payload)}
        case CLEAR_INPUTS:
            return {...state, inputName: "", inputAverageCheck: 0, inputAverageDeliveryTime: 0}
        default:
            return state
    }
}