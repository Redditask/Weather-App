import React from "react";

import styles from "../styles/components/LocationSelectList.module.scss";
import "../styles/components/UI/TransitionStyles.scss";

import {ILocation} from "../types/types";

interface LocationSelectProps {
    locationList: ILocation [];
    selectLocation: (location: ILocation) => void;
}

const LocationSelectList: React.FC<LocationSelectProps> = ({locationList, selectLocation}) => {
    const selectLocationHandler = (location: ILocation) =>
        selectLocation({name: location.name, country: location.country, lat: location.lat, lon: location.lon});

    return (
        <div className={styles.LocationSelectList}>
            {locationList.map((location: ILocation, index: number)=>
                <p
                    key={index}
                    className={styles.LocationSelectList__item}
                    onClick={()=>selectLocationHandler(location)}
                >
                    {location.name}, {location.country}
                </p>)
            }
        </div>
    );
};

export default LocationSelectList;
