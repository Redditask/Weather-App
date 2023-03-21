import React from 'react';

import styles from "../../styles/components/UI/Button.module.scss";

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({text, ...props}) => {
    return (
        <button className={styles.Button} {...props}>
            {text}
        </button>
    );
};

export default Button;
