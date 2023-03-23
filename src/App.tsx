import React, {useEffect, useState} from "react";

import styles from "./styles/App.module.scss";

import Header from "./components/UI/Header";
import WeatherList from "./components/WeatherList";
import Modal from "./components/UI/Modal";
import AddLocationForm from "./components/AddLocationForm";

function App() {
    const [locations, setLocations] = useState<any>([]);
    const [modalStatus, setModalStatus] = useState(false);

    const createCard = (newLocation: any) => {
        setLocations([...locations, newLocation]);
        setModalStatus(false);

        //localStorage.setItem("data", JSON.stringify([...locations, newLocation]));
    };

    const removeCard = (card: any): void => {
        // localStorage.setItem("data", JSON.stringify(locations.filter(location => (location.name !== card.name || location.country !== card.country))));
        // setLocations(JSON.parse(localStorage.getItem("data")));
    };

    useEffect(()=>{
        //setLocations(JSON.parse(localStorage.getItem("data")));
    },[]);

    const modalStatusHandler = () => setModalStatus(true);

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
                ? <WeatherList locations={locations} remove={removeCard}/>
                : <div>
                    <h1 style={{textAlign:"center", marginTop:"20rem"}}>Add your weather!</h1>
                </div>
            }
            <Modal visible={modalStatus} setVisible={setModalStatus}>
                <AddLocationForm
                    create={createCard}
                    buttonText="Add location to the list"
                    titleText="Enter location name"
                />
            </Modal>
        </div>
    );
}

export default App;
