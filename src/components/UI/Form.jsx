import styles from "../../styles/components/UI/Form.module.scss";

import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

const Form = ({create, buttonText, titleText}) => {
    const [location, setLocation] = useState("");

    function addNewLocation(event) {
        event.preventDefault();
        create(location);
        setLocation("");
    }

    return (
        <form className={styles.Form}>
            <h3 style={{textAlign:"center", marginTop:"1rem", fontWeight:"normal"}}>{titleText}</h3>
            <div>
                <Input
                    value={location}
                    type="text"
                    placeholder="Location name"
                    onChange={event=>setLocation(event.target.value)}
                />
            </div>
            <Button text={buttonText} onClick={addNewLocation}/>
        </form>
    );
};

export default Form;
