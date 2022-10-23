import styles from "../../styles/components/UI/Input.module.scss"

import React from 'react';

const Input = ({...props}) => {
    return (
        <input className={styles.Input} {...props}/>
    );
};

export default Input;
