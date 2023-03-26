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

    const addNewLocation = (event: any): void => {
        event.preventDefault();
        create(location);

        setLocation({name: "", country: "", lon: 0, lat: 0});
    };

    const locationInputHandler = (event: any): void => {
        setInputString(`${event.target.value}`);
        setLocation({name: event.target.value, country: "", lat: 0, lon: 0});
    };

    const selectLocationHandler = (location: ILocation): void => {
        setInputString(`${location.name}, ${location.country}`);
        setLocation(location);
    };

    return (
        <form className={styles.addLocationForm}>
            <h3 className={styles.addLocationForm__title}>{titleText}</h3>
                <Input
                    value={`${inputString}`}
                    type="text"
                    placeholder="Location name"
                    onChange={locationInputHandler}
                />
                <LocationSelectList
                    locationList={locationList}
                    selectLocation={selectLocationHandler}
                />
            {
                location.country === ""
                    ?
                    <Button
                        title="Select location in list"
                        text={buttonText}
                        disabled={true}
                    />
                    :
                    <Button
                        text={buttonText}
                        disabled={false}
                        onClick={addNewLocation}
                    />
            }
        </form>
    );
};

export default AddLocationForm;
