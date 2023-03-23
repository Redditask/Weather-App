import React from "react";

import styles from "../../styles/components/UI/Input.module.scss";

interface InputProps {
    value: string;
    type: string;
    placeholder: string;
    onChange: (event: any) => void;
}

const Input: React.FC<InputProps> = ({value, type, placeholder, onChange}) => {

    return (
        <input
            className={styles.Input}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
