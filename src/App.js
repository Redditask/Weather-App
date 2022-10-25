import styles from "./styles/App.module.scss";

import React, {useState} from "react";
import NavBar from "./components/UI/NavBar";
import WeatherList from "./components/WeatherList";
import Modal from "./components/UI/Modal";
import Form from "./components/UI/Form";
import PreForm from "./components/PreForm";

function App() {
    const headerLinks = ["About"];
    const [locations, setLocations] = useState(["Hrodno"]);
    const [modalStatus, setModalStatus] = useState(false);

    function createCard(newLocation){
        setLocations([...locations, newLocation]);
        setModalStatus(false);
    }

    function removeCard(card){
        setLocations(locations.filter(location => location !== card))
    }

    return (
        <div className={styles.App}>
            <Modal visible={modalStatus} setVisible={setModalStatus}>
                <Form create={createCard}/>
            </Modal>
            <NavBar text={headerLinks}/>
            <WeatherList locations={locations} remove={removeCard}>
                <PreForm>
                    <p title="Add card" className={styles.AddCard} onClick={()=>setModalStatus(true)}>+</p>
                </PreForm>
            </WeatherList>
        </div>
    );
}

export default App;
