import React from "react";

import styles from "../styles/components/WeatherDescription.module.scss";

import {ILocation, ILocationInfo} from "../types/types";

interface WeatherDescriptionProps {
    location: ILocation;
    locationInfo: ILocationInfo;
}

const WeatherDescription: React.FC<WeatherDescriptionProps> = ({location, locationInfo}) => {

    return (
        <div className={styles.weatherDescription}>
            <p
                title="Location"
                className={styles.weatherDescription__title}
            >
                {location.name}, {location.country}
            </p>
            <p className={styles.weatherDescription__item}>
                {Math.round(locationInfo.main.temp - 273)}{'\u00b0'} temperature
            </p>
            <p className={styles.weatherDescription__item}>
                {locationInfo.main.humidity}% humidity
            </p>
            <p className={styles.weatherDescription__item}>
                {locationInfo.wind.speed}m/s speed
            </p>
        </div>
    );
};

export default WeatherDescription;
