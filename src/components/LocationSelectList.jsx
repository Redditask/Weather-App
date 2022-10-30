import styles from "../styles/components/LocationSelectList.module.scss";
import "../styles/components/UI/TransitionStyles.scss";

import React from 'react';

const LocationSelectList = ({locationList, select}) => {
    return (
        <div className={styles.LocationSelectList}>
            {locationList.map((location,index)=>
            <p key={index} className={styles.LocationSelectList__item} onClick={()=>select({name: location.name, country: location.country})}>{location.name}, {location.country}</p>)}
        </div>
    );
};

export default LocationSelectList;
