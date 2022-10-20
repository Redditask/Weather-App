import styles from "../../styles/components/UI/NavBar.module.scss";
import { WiCloud } from "react-icons/wi";

import React from 'react';
import NavItem from "./NavItem";

const NavBar = ({text}) => {
    return (
        <nav className={styles.NavBar}>
            <WiCloud size="5rem"/>
            <ul className={styles.NavBar__items}>
                {text.map(word =>
                    <li key={word}><NavItem text={word}/></li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
