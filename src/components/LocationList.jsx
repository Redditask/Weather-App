import styles from "../styles/components/LocationList.module.scss";
import "../styles/components/UI/TransitionStyles.scss";

import React from 'react';

const LocationList = ({locationList, select}) => {
    return (
        <div className={styles.LocationList}>
            {locationList.map((location,index)=>
            <p key={index} className={styles.LocationList__item} onClick={()=>select({name: location.name, country: location.country})}>{location.name}, {location.country}</p>)}
        </div>
    );
};

export default LocationList;
