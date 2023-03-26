import React from "react";

import styles from "../styles/components/WeatherItem.module.scss";

import {useGetDataAboutLocationQuery} from "../API/weatherApi";

import Loader from "./UI/Loader";
import ErrorWeather from "./ErrorWeather";
import SuccessWeather from "./SuccessWeather";

import {ILocation} from "../types/types";

import {locationInfoInitialState} from "../utils/consts";

interface WeatherItemProps {
    location: ILocation;
    removeLocation: (location: ILocation) => void;
}

const WeatherItem: React.FC<WeatherItemProps> = ({location, removeLocation}) => {
    const {data: locationInfo = locationInfoInitialState, isSuccess, isLoading} = useGetDataAboutLocationQuery({
        locationName: location.name,
        locationCountry: location.country
    });

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
                        <SuccessWeather
                            location={location}
                            locationInfo={locationInfo}
                            removeLocation={removeLocation}
                        />
            }
        </div>
    );
};

export default WeatherItem;
