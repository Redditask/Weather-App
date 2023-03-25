import React, {useState} from "react";

import styles from "../styles/components/WeatherItem.module.scss";

import {useGetDataAboutLocationQuery} from "../API/weatherApi";

import Loader from "./UI/Loader";

import {ILocation} from "../types/types";

import {locationInfoInitialState} from "../utils/consts";
import {getImage} from "../utils/helpers";

interface WeatherItemProps {
    location: ILocation;
    removeLocation: (card: any) => void;
}

const WeatherItem: React.FC<WeatherItemProps> = ({location, removeLocation}) => {
    const {data: locationInfo = locationInfoInitialState, isSuccess, isLoading} = useGetDataAboutLocationQuery({
        locationName: location.name,
        locationCountry: location.country
    });

    const removeLocationHandler = (): void => removeLocation(location);

    return (
        <div className={styles.WeatherItem}>
            {isLoading
                ? <Loader/>
                : !isSuccess
                    ? <div className={styles.WeatherItem__error}>
                        <div
                            className={styles.WeatherItem__title}
                            title="Location"
                        >
                            {location.name}, {location.country}
                        </div>
                        <p>Sorry, we have no data for this</p>
                        <p
                            className={styles.DeleteCardItem}
                            title="Delete weather"
                            onClick={removeLocationHandler}
                        >
                            Delete
                        </p>
                    </div>
                    : <>
                        <div className={styles.WeatherItem__leftHalf}>
                            <img
                                src={getImage(locationInfo.weather[0].icon)}
                                alt='icon'
                                className={styles.WeatherItem__image}
                            />
                            <div
                                title="weather"
                                className={styles.WeatherItem__weatherState}
                            >
                                {locationInfo.weather[0].main}
                            </div>
                            <p
                                className={styles.DeleteCardItem}
                                title="Delete weather"
                                onClick={removeLocationHandler}
                            >
                                Delete
                            </p>
                        </div>
                        <div className={styles.WeatherItem__data}>
                            <div
                                title="Location"
                                className={styles.WeatherItem__title}
                            >
                                {location.name}, {location.country}
                            </div>
                            <div className={styles.WeatherItem__element}>
                                {Math.round(locationInfo.main.temp - 273)}{'\u00b0'} temperature
                            </div>
                            <div className={styles.WeatherItem__element}>
                                {locationInfo.main.humidity}% humidity
                            </div>
                            <div className={styles.WeatherItem__element}>
                                {locationInfo.wind.speed}m/s speed
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default WeatherItem;
