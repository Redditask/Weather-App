import React from 'react';

import styles from "../../styles/components/UI/Button.module.scss";

interface ButtonProps {
    text: string;
    title?: string;
    disabled: boolean;
    onClick?: (event: any) => void;
}

const Button: React.FC<ButtonProps> = ({text, title, disabled, onClick}) => {

    return (
        <button
            className={styles.Button}
            title={title}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
