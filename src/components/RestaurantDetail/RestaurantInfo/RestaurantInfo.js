import React from "react"
import styles from './RestaurantInfo.module.css'

const RestaurantInfo = (props) => {
    return (
        <div className={styles.restaurantInfo}>
            <div>
                <div className={styles.key}>
                    <strong>Name</strong>
                </div>
                <div className={styles.key}>
                    <strong>Average check</strong>
                </div>
                <div className={styles.key}>
                    <strong>Average delivery time</strong>
                </div>
            </div>
            <div>
                <div className={styles.value}>
                    {props.restaurant.name}
                </div>
                <div className={styles.value}>
                    {props.restaurant.average_check}
                </div>
                <div className={styles.value}>
                    {props.restaurant.average_delivery_time}
                </div>
            </div>
        </div>
    )
}

export default RestaurantInfo