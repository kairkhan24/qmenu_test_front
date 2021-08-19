import React, {useEffect} from "react"
import styles from './RestaurantList.module.css'
import RestaurantItem from "./RestaurantItem/RestaurantItem";
import {useDispatch, useSelector, connect} from "react-redux";
import {getRestaurants} from "../../store/asyncActions";
import {getLikedRestaurants, offRedirect} from "../../store/actionCreators";

const RestaurantList = () => {
    const redirect = useSelector(state => state.redirect)
    let restaurants = useSelector(state => state.restaurants)
    let likedRestaurants = useSelector(state => state.likedRestaurants)
    const dispatch = useDispatch()

    useEffect(() => {
        if (redirect) {
            dispatch(offRedirect())
        }
        dispatch(getRestaurants())
        dispatch(getLikedRestaurants())
    }, [])


    if (restaurants.length === 0) {
        return <div className={styles.restaurants}>Ресторанов пока нет...</div>
    }

    console.log(likedRestaurants)

    return (
        <div className={styles.restaurants}>
            {restaurants.map(r => <RestaurantItem liked={likedRestaurants.includes(r.id)} id={r.id} name={r.name} key={r.id} />)}
        </div>
    )
}

export default RestaurantList