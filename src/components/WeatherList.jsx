import styles from "../styles/components/WeatherList.module.scss";
import "../styles/components/UI/TransitionStyles.scss"

import React from 'react';
import WeatherItem from "./WeatherItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const WeatherList = ({locations, remove}) => {

    return (
            <TransitionGroup className={styles.WeatherList}>
            {locations.map(location=>
                <CSSTransition
                    key={location.name+location.country}
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
