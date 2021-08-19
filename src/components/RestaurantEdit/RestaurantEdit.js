import React, {useEffect} from "react"
import styles from './RestaurantEdit.module.css'
import {
    changeAverageCheck,
    changeAverageDeliveryTime,
    changeName
} from "../../store/actionCreators";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSingleRestaurant, putRestaurant} from "../../store/asyncActions";


const RestaurantEdit = () => {
    const success = useSelector(state => state.success)
    const error = useSelector(state => state.error)

    const {restaurantId} = useParams()
    const dispatch = useDispatch()

    let inputName = useSelector(state => state.inputName)
    let inputAverageCheck = useSelector(state => state.inputAverageCheck)
    let inputAverageDeliveryTime = useSelector(state => state.inputAverageDeliveryTime)

    let restaurant = useSelector(state => state.restaurants.find(r => r.id === Number(restaurantId)))
    if (!restaurant) {
        restaurant = {}
        dispatch(getSingleRestaurant(restaurantId))
    }

    useEffect(() => {
        dispatch(changeName(restaurant.name))
        dispatch(changeAverageCheck(restaurant.average_check))
        dispatch(changeAverageDeliveryTime(restaurant.average_delivery_time))
    }, [restaurant])

    const editRestaurant = () => {
        const restaurantData = {
            id: restaurant.id,
            name: inputName,
            average_check: inputAverageCheck,
            average_delivery_time: inputAverageDeliveryTime
        }
        dispatch(putRestaurant(restaurantData))
    }


    return (
        <div>
            <div className={styles.success}>{success ? success : null}</div>
            <div className={styles.error}>{error ? error : null}</div>
            <div className={styles.formGroup}>
                <label htmlFor="name">Название</label>
                <input id ="name"
                       type="text"
                       placeholder="Название"
                       onChange={e => dispatch(changeName(e.target.value))}
                       value={inputName}/>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="aCheck">Средний чек</label>
                <input id="aCheck"
                       type="number"
                       placeholder="Средний чек"
                       onChange={e => dispatch(changeAverageCheck(Number(e.target.value)))}
                       value={inputAverageCheck}/>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="aDTime">Среднее время доставки</label>
                <input id="aDTime"
                       type="number"
                       placeholder="Среднее время доставки"
                       onChange={e => dispatch(changeAverageDeliveryTime(Number(e.target.value)))}
                       value={inputAverageDeliveryTime}/>
            </div>
            <div className={`${styles.formButton} ${styles.edit}`}>
                <button onClick={editRestaurant}>Edit restaurant</button>
            </div>
        </div>
    )
}

export default RestaurantEdit