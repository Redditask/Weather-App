import styles from "../../styles/components/UI/Button.module.scss"

import React from 'react';

const Button = ({text, ...props}) => {
    return (
        <button className={styles.Button} {...props}>
            {text}
        </button>
    );
};

export default Button;
