import React from "react";

import styles from "../styles/components/ErrorLocation.module.scss";

import {ILocation} from "../types/types";

interface ErrorWeatherProps {
    location: ILocation;
    removeLocation: (location: ILocation) => void;
}

const ErrorWeather: React.FC<ErrorWeatherProps> = ({location, removeLocation}) => {

    const removeLocationHandler = (): void => removeLocation(location);

    return (
        <div className={styles.errorLocation}>
            <p
                className={styles.errorLocation__title}
                title="Location"
            >
                {location.name}, {location.country}
            </p>
            <p>Sorry, we have no data for this</p>
            <p
                className={styles.errorLocation__deleteButton}
                title="Delete weather"
                onClick={removeLocationHandler}
            >
                Delete
            </p>
        </div>
    );
};

export default ErrorWeather;
