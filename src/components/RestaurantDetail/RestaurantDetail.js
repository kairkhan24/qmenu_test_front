import React from "react"
import styles from './RestaurantDetail.module.css'
import RestaurantInfo from "./RestaurantInfo/RestaurantInfo"
import {NavLink, Redirect, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {deleteRestaurant, getSingleRestaurant} from "../../store/asyncActions"


const RestaurantDetail = () => {
    const redirect = useSelector(state => state.redirect)
    const { restaurantId } = useParams()
    const dispatch = useDispatch()
    let restaurant = useSelector(state => state.restaurants.find(obj => obj.id === Number(restaurantId)))

    if (!restaurant) {
        restaurant = {}
        dispatch(getSingleRestaurant(restaurantId))
    }


    if (redirect) {
        return <Redirect exact to="/"/>
    }


    return (
        <div>
            <div className={styles.restaurantImage}>
                <img
                    src="https://elements-cover-images-0.imgix.net/6359eb8d-2d31-4bea-a137-92baa4b68eb2?auto=compress%2Cformat&fit=max&w=2740&s=478a3e8e28b0c42eb79183d514a9406b"
                    alt="" />
            </div>
            <RestaurantInfo restaurant={restaurant} />
            <div className={styles.updateButton}>
                <NavLink to={"/restaurant-edit/" + restaurantId}>Update this restaurant</NavLink>
            </div>
            <div className={styles.deleteButton}>
                <button onClick={() => dispatch(deleteRestaurant(restaurant.id))}>Delete this restaurant</button>
            </div>
        </div>
    )
}

export default RestaurantDetail