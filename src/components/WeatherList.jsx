import styles from "../styles/components/WeatherList.module.scss";
import "../styles/components/UI/TransitionStyles.scss"

import React from 'react';
import WeatherItem from "./WeatherItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const WeatherList = ({locations, remove, children}) => {

    return (
            <TransitionGroup className={styles.WeatherList}>
            {locations.map(location=>
                <CSSTransition
                    key={location}
                    timeout={850}
                    classNames="card"
                >
                    <WeatherItem location={location} key={location} remove={remove}/>
                </CSSTransition>
            )}
                {children}
            </TransitionGroup>
    );
};

export default WeatherList;
