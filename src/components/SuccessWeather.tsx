import React from "react";

import styles from "../styles/components/SuccessWeather.module.scss";

import WeatherDescription from "./WeatherDescription";

import {ILocation, ILocationInfo} from "../types/types";

import {getImage} from "../utils/helpers";

interface SuccessWeatherProps {
    location: ILocation;
    locationInfo: ILocationInfo;
    removeLocation: (location: ILocation) => void;
}

const SuccessWeather: React.FC<SuccessWeatherProps> = ({location, locationInfo, removeLocation}) => {
    const removeLocationHandler = (): void => removeLocation(location);

    return (
        <>
            <div className={styles.successWeather__main}>
                <img
                    src={getImage(locationInfo.weather[0].icon)}
                    alt='icon'
                    className={styles.successWeather__image}
                />
                <p
                    title="weather"
                    className={styles.successWeather__weather}
                >
                    {locationInfo.weather[0].main}
                </p>
                <p
                    className={styles.successWeather__deleteButton}
                    title="Delete this weather"
                    onClick={removeLocationHandler}
                >
                    Delete
                </p>
            </div>
            <WeatherDescription
                location={location}
                locationInfo={locationInfo}
            />
        </>
    );
};

export default SuccessWeather;
