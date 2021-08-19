import React from "react"
import styles from './RestaurantAdd.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    changeName,
    changeAverageCheck,
    changeAverageDeliveryTime,
    clearInputs
} from '../../store/actionCreators'
import {postRestaurants} from "../../store/asyncActions";

const RestaurantAdd = () => {
    const dispatch = useDispatch()
    const success = useSelector(state => state.success)
    const error = useSelector(state => state.error)

    let inputName = useSelector(state => state.inputName)
    let inputAverageCheck = useSelector(state => state.inputAverageCheck)
    let inputAverageDeliveryTime = useSelector(state => state.inputAverageDeliveryTime)

    const createRestaurant = () => {
        const restaurant = {
            name: inputName,
            average_check: inputAverageCheck,
            average_delivery_time: inputAverageDeliveryTime
        }
        dispatch(postRestaurants(restaurant))
        dispatch(clearInputs())
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
            <div className={`${styles.formButton} ${styles.create}`}>
                <button onClick={createRestaurant}>Create restaurant</button>
            </div>
        </div>
    )
}

export default RestaurantAdd