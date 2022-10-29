import styles from "../../styles/components/UI/Form.module.scss";

import React, {useEffect, useState} from 'react';
import Input from "./Input";
import Button from "./Button";
import WeatherServise from "../../WeatherAPI/weatherServise";
import {useFetching} from "../../hooks/useFetching";
import LocationList from "../LocationList";

const Form = ({create, buttonText, titleText}) => {
    const [location, setLocation] = useState({name:"", country:""});
    const [locationList, setLocationList] = useState([]);

    const [fetch] = useFetching(async () => {
        const response = await WeatherServise.getCoordinates(location);
        setLocationList(response.data);
    });

    useEffect(()=>{
        if(location.name!=="") fetch();
    }, [location.name])

    function addNewLocation(event) {
        event.preventDefault();
        create(location);

        setLocation({...location, name: "", country: ""});
        setLocationList([]);
    }

    return (
        <form className={styles.Form}>
            <h3 style={{textAlign:"center", marginTop:"1rem", fontWeight:"normal"}}>{titleText}</h3>
                <Input
                    value={`${location.name}${location.country}`}
                    type="text"
                    placeholder="Location name"
                    onChange={event=>setLocation({...location, name: event.target.value, country: ""})}
                />
                <LocationList locationList={locationList} select={setLocation}/>
            {location.country==="" ? <Button text={buttonText} disabled title="Select location in list"/> : <Button text={buttonText} onClick={addNewLocation}/>}
        </form>
    );
};

export default Form;
