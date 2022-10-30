import styles from "../../styles/components/UI/Header.module.scss";
import { WiCloud } from "react-icons/wi";

import React from 'react';

const Header = ({children}) => {
    return (
        <nav className={styles.Header}>
            <WiCloud size="5rem"/>
            {children}
        </nav>
    );
};

export default Header;
