import styles from "../styles/components/WeatherList.module.scss";

import React from 'react';
import WeatherItem from "./WeatherItem";

const WeatherList = ({locations, remove, children}) => {

    return (
        <div className={styles.WeatherList}>
            {locations.map(location=>
                <WeatherItem location={location} key={location} remove={remove}/>
            )}
            {children}
        </div>
    );
};

export default WeatherList;
