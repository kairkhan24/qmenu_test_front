import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";
import RestaurantAdd from "./components/RestaurantAdd/RestaurantAdd";
import RestaurantEdit from "./components/RestaurantEdit/RestaurantEdit";

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <Sidebar/>
                <div className="content">
                    <Route exact path="/" component={RestaurantList}/>
                    <Route path="/restaurant/:restaurantId" component={RestaurantDetail}/>
                    <Route path="/restaurant-add" component={RestaurantAdd} />
                    <Route path="/restaurant-edit/:restaurantId" component={RestaurantEdit}/>
                </div>
            </div>
        </Router>
    )
}

export default App
