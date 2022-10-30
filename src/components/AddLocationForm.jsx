import styles from "../styles/components/AddLocationForm.module.scss";

import React, {useEffect, useState} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import WeatherServise from "../WeatherAPI/weatherServise";
import {useFetching} from "../hooks/useFetching";
import LocationSelectList from "./LocationSelectList";

const AddLocationForm = ({create, buttonText, titleText}) => {
    const [location, setLocation] = useState({name:"", country:""});
    const [locationList, setLocationList] = useState([]);

    const [fetch] = useFetching(async () => {
        const response = await WeatherServise.getLocations(location);
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
        <form className={styles.AddLocationForm}>
            <h3 style={{textAlign:"center", marginTop:"1rem", fontWeight:"normal"}}>{titleText}</h3>
                <Input
                    value={`${location.name}${location.country}`}
                    type="text"
                    placeholder="Location name"
                    onChange={event=>setLocation({...location, name: event.target.value, country: ""})}
                />
                <LocationSelectList locationList={locationList} select={setLocation}/>
            {location.country==="" ? <Button text={buttonText} disabled title="Select location in list"/> : <Button text={buttonText} onClick={addNewLocation}/>}
        </form>
    );
};

export default AddLocationForm;
