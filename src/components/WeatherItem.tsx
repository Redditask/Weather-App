import React from "react";

import styles from "../styles/components/WeatherItem.module.scss";

import {useGetDataAboutLocationQuery} from "../API/weatherApi";

import Loader from "./UI/Loader";
import ErrorWeather from "./ErrorWeather";
import WeatherDescription from "./WeatherDescription";

import {ILocation} from "../types/types";

import {locationInfoInitialState} from "../utils/consts";
import {getImage} from "../utils/helpers";


interface WeatherItemProps {
    location: ILocation;
    removeLocation: (location: ILocation) => void;
}

const WeatherItem: React.FC<WeatherItemProps> = ({location, removeLocation}) => {
    const {data: locationInfo = locationInfoInitialState, isSuccess, isLoading} = useGetDataAboutLocationQuery({
        locationName: location.name,
        locationCountry: location.country
    });

    const removeLocationHandler = (): void => removeLocation(location);

    return (
        <div className={styles.weatherItem}>
            {
                isLoading
                    ?
                    <Loader/>
                    :
                    !isSuccess
                        ?
                        <ErrorWeather
                            location={location}
                            removeLocation={removeLocation}
                        />
                        :
                        <>
                            <div className={styles.weatherItem__leftHalf}>
                                <img
                                    src={getImage(locationInfo.weather[0].icon)}
                                    alt='icon'
                                    className={styles.WeatherItem__image}
                                />
                                <p
                                    title="weather"
                                    className={styles.WeatherItem__weatherState}
                                >
                                    {locationInfo.weather[0].main}
                                </p>
                                <p
                                    className={styles.weatherItem__deleteButton}
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
            }
        </div>
    );
};

export default WeatherItem;
