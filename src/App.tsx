import React, {useEffect, useState} from "react";

import styles from "./styles/App.module.scss";

import Header from "./components/UI/Header";
import WeatherList from "./components/WeatherList";
import Modal from "./components/UI/Modal";
import AddLocationForm from "./components/AddLocationForm";

import {ILocation} from "./types/types";

function App() {
    const [locations, setLocations] = useState<ILocation []>([]);
    const [modalStatus, setModalStatus] = useState<boolean>(false);

    const addLocation = (location: ILocation) => {
        setLocations([...locations, location]);
        setModalStatus(false);

        localStorage.setItem("data", JSON.stringify([...locations, location]));
    };

    const removeLocation = (removedLocation: ILocation): void => {
        localStorage.setItem("data", JSON.stringify(locations.filter(
            location => (location.name !== removedLocation.name || location.country !== removedLocation.country)
        )));
        setLocations(JSON.parse(localStorage.getItem("data") || "[]"));
    };

    useEffect(()=>{
        setLocations(JSON.parse(localStorage.getItem("data") || "[]"));
    },[]);

    const modalStatusHandler = (): void => setModalStatus(true);

    return (
        <div className={styles.App}>
            <Header>
                <p
                    title="Add weather"
                    className={styles.AddCardItem}
                    onClick={modalStatusHandler}
                >
                    Add
                </p>
            </Header>
            { locations.length
                ? <WeatherList locations={locations} removeLocation={removeLocation}/>
                : <div>
                    <h1 style={{textAlign:"center", marginTop:"20rem"}}>Add your weather!</h1>
                </div>
            }
            <Modal visible={modalStatus} setVisible={setModalStatus}>
                <AddLocationForm
                    create={addLocation}
                    buttonText="Add location to the list"
                    titleText="Enter location name"
                />
            </Modal>
        </div>
    );
}

export default App;
