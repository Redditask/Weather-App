import React, {useState} from "react";

import styles from "../styles/components/WeatherItem.module.scss";

import Loader from "./UI/Loader";
import {ILocation} from "../types/types";
import {useGetDataAboutLocationQuery, useGetImageQuery} from "../API/weatherApi";

interface WeatherItemProps {
    location: ILocation;
    remove: (card: any) => void;
}

const WeatherItem: React.FC<WeatherItemProps> = ({location, remove}) => {
    const {data: locationInfo, isSuccess, isLoading} = useGetDataAboutLocationQuery({
        locationName: location.name,
        locationCountry: location.country
    });

    console.log(locationInfo);

    const removeLocation = () => remove(location);

    return (
        <div className={styles.WeatherItem}>
            {isLoading
                ? <Loader/>
                : !isSuccess
                    ? <div className={styles.WeatherItem__error}>
                        <div title="Location"
                             className={styles.WeatherItem__title}>{location.name}, {location.country}</div>
                        <p>Sorry, we have no data for this</p>
                        <p title="Delete weather" className={styles.DeleteCardItem}
                           onClick={removeLocation}>Delete</p>
                    </div>
                    : <>
                        <div className={styles.WeatherItem__leftHalf}>
                            {/*<img src={image} alt='icon' className={styles.WeatherItem__image}/>*/}
                            <div title="weather" className={styles.WeatherItem__weatherState}>{locationInfo.weather.main}</div>
                            <p title="Delete weather" className={styles.DeleteCardItem}
                               onClick={removeLocation}>Delete</p>
                        </div>
                        <div className={styles.WeatherItem__data}>
                            <div
                                title="Location"
                                className={styles.WeatherItem__title}
                            >
                                {location.name}, {location.country}
                            </div>
                            <div className={styles.WeatherItem__element}>{Math.round(locationInfo.main.temp - 273)}{'\u00b0'} temperature</div>
                            <div className={styles.WeatherItem__element}>{locationInfo.main.humidity}% humidity</div>
                            <div className={styles.WeatherItem__element}>{locationInfo.wind.speed}m/s speed</div>
                        </div>
                    </>
            }
        </div>
    );
};

export default WeatherItem;
