import React from "react";

import styles from "../styles/components/WeatherList.module.scss";
import "../styles/components/UI/TransitionStyles.scss"

import {CSSTransition, TransitionGroup} from "react-transition-group";

import WeatherItem from "./WeatherItem";

interface WeatherListProps {
    locations: any;
    remove: (card: any) => void;
}

const WeatherList: React.FC<WeatherListProps> = ({locations, remove}) => {

    return (
        <TransitionGroup className={styles.WeatherList}>
            {locations.map((location: any) =>
                <CSSTransition
                    key={location.name + location.country}
                    timeout={850}
                    classNames="item"
                >
                    <WeatherItem location={location} remove={remove}/>
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};

export default WeatherList;
