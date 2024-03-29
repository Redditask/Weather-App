import React from "react";

import styles from "../styles/components/WeatherList.module.scss";
import "../styles/components/UI/TransitionStyles.scss"

import {CSSTransition, TransitionGroup} from "react-transition-group";

import WeatherItem from "./WeatherItem";

import {ILocation} from "../types/types";

interface WeatherListProps {
    locations: ILocation [];
    removeLocation: (card: any) => void;
}

const WeatherList: React.FC<WeatherListProps> = ({locations, removeLocation}) => {

    return (
        <TransitionGroup className={styles.WeatherList}>
            {locations.map((location: ILocation) =>
                <CSSTransition
                    key={location.name + location.country}
                    timeout={850}
                    classNames="item"
                >
                    <WeatherItem location={location} removeLocation={removeLocation}/>
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};

export default WeatherList;
