import styles from "./styles/App.module.scss";

import React, {useEffect, useState} from "react";
import Header from "./components/UI/Header";
import WeatherList from "./components/WeatherList";
import Modal from "./components/UI/Modal";
import AddLocationForm from "./components/AddLocationForm";

function App() {
    const [locations, setLocations] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);

    function createCard(newLocation){
        setLocations([...locations, newLocation]);
        setModalStatus(false);

        localStorage.setItem("data", JSON.stringify([...locations, newLocation]));
    }

    function removeCard(card){
        localStorage.setItem("data", JSON.stringify(locations.filter(location => (location.name !== card.name || location.country !== card.country))));
        setLocations(JSON.parse(localStorage.getItem("data")));
    }

    useEffect(()=>{
        setLocations(JSON.parse(localStorage.getItem("data")));
    },[])

    return (
        <div className={styles.App}>
            <Modal visible={modalStatus} setVisible={setModalStatus}>
                <AddLocationForm create={createCard} buttonText="Add location to the list" titleText="Enter location name"/>
            </Modal>
            <Header setModalStatus={setModalStatus}>
                <p title="Add weather" className={styles.AddCardItem} onClick={()=>setModalStatus(true)}>Add</p>
            </Header>
            { locations.length
                ? <WeatherList locations={locations} remove={removeCard}/>
                : <div>
                    <h1 style={{textAlign:"center", marginTop:"20rem"}}>Add your weather!</h1>
                </div>
            }
        </div>
    );
}

export default App;
