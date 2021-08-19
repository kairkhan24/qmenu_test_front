import React from "react"
import styles from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.navLink}>
                <NavLink to="/restaurant-add" activeClassName={styles.active}>Add restaurant</NavLink>
            </div>
            <div className={styles.navLink}>
                <NavLink exact to="/" activeClassName={styles.active}>Restaurant List</NavLink>
            </div>
        </div>
    )
}

export default Sidebar