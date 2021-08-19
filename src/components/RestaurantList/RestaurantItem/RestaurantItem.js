import React from "react"
import styles from './RestaurantItem.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {likeRestaurant} from "../../../store/actionCreators";


const RestaurantItem = (props) => {
    const dispatch = useDispatch()


    console.log(props.liked)

    return (
        <div className={styles.restaurant}>
            <div className={styles.restaurantImage}>
                <img
                    src="https://elements-cover-images-0.imgix.net/6359eb8d-2d31-4bea-a137-92baa4b68eb2?auto=compress%2Cformat&fit=max&w=2740&s=478a3e8e28b0c42eb79183d514a9406b"
                    alt=""/>
            </div>
            <div>
                {props.name}
            </div>
            <div className={styles.detailBtn}>
                <NavLink to={`/restaurant/${props.id}`}>Подробно</NavLink>
            </div>
            <div>
                {props.liked ? <button style={{backgroundColor: "red"}} onClick={() => dispatch(likeRestaurant(props.id))}>LIKE</button> : <button onClick={() => dispatch(likeRestaurant(props.id))}>LIKE</button>}
            </div>
        </div>
    )
}

export default RestaurantItem