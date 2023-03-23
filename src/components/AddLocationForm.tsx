import React, {useEffect, useState} from "react";

import styles from "../styles/components/AddLocationForm.module.scss";

import {useGetLocationsQuery} from "../API/weatherApi";

import Input from "./UI/Input";
import Button from "./UI/Button";
import LocationSelectList from "./LocationSelectList";

import {ILocation} from "../types/types";

import {locationInitialState} from "../utils/consts";

interface AddLocationFormProps {
    create: (location: any) => void;
    buttonText: string;
    titleText: string;
}

const AddLocationForm: React.FC<AddLocationFormProps> = ({create, buttonText, titleText}) => {
    const [location, setLocation] = useState<ILocation>(locationInitialState);
    const [inputString, setInputString] = useState<string>("");

    const {data: locationList = []} = useGetLocationsQuery({locationName: location.name});

    const addNewLocation = (event: any) => {
        event.preventDefault();
        create(location);

        setLocation({name: "", country: "", lon: 0, lat: 0});
    };

    const locationInputHandler = (event: any) => {
        setInputString(`${event.target.value}`);
        setLocation({name: event.target.value, country: "", lat: 0, lon: 0});
    };

    const selectLocationHandler = (location: ILocation) => {
        setInputString(`${location.name}, ${location.country}`);
        setLocation(location);
    };

    return (
        <form className={styles.AddLocationForm}>
            <h3 style={{textAlign:"center", marginTop:"1rem", fontWeight:"normal"}}>{titleText}</h3>
                <Input
                    value={`${inputString}`}
                    type="text"
                    placeholder="Location name"
                    onChange={locationInputHandler}
                />
                <LocationSelectList locationList={locationList} selectLocation={selectLocationHandler}/>
            {location.country === ""
                ? <Button text={buttonText} disabled={true} title="Select location in list"/>
                : <Button text={buttonText} disabled={false} onClick={addNewLocation}/>
            }
        </form>
    );
};

export default AddLocationForm;
