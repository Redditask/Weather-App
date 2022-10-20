import styles from "./styles/App.module.scss";

import React from "react";
import NavBar from "./components/UI/NavBar";
import WeatherList from "./components/WeatherList";

function App() {
    const headerLinks = ["About", "Add City"];

    return (
        <div className={styles.App}>
            <NavBar text={headerLinks}/>
            <WeatherList/>
        </div>
    );
}

export default App;
