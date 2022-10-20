import styles from "../../styles/components/UI/NavItem.module.scss"

import React from 'react';

const NavItem = ({text}) => {
    return (
        <div className={styles.NavItem}>
            {text}
        </div>
    );
};

export default NavItem;
