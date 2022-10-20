import styles from "../styles/components/WeatherList.module.scss";

import React from 'react';
import WeatherItem from "./WeatherItem";

const WeatherList = () => {
    return (
        <div className={styles.WeatherList}>
            <WeatherItem/>
            <WeatherItem/>
        </div>
    );
};

export default WeatherList;
