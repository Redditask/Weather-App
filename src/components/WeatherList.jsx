import styles from "../styles/components/WeatherList.module.scss";

import React, {useState} from 'react';
import WeatherItem from "./WeatherItem";

const WeatherList = ({locations, children}) => {

    return (
        <div className={styles.WeatherList}>
            {locations.map(location=>
                <WeatherItem location={location} key={location}/>
            )}
            {children}
        </div>
    );
};

export default WeatherList;
