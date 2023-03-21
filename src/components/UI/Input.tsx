import React from "react";

import styles from "../../styles/components/UI/Input.module.scss"

const Input: React.FC = ({...props}) => {
    return (
        <input className={styles.Input} {...props}/>
    );
};

export default Input;
