import styles from "./styles/App.module.scss";

import React, {useState} from "react";
import NavBar from "./components/UI/NavBar";
import WeatherList from "./components/WeatherList";
import Modal from "./components/UI/Modal";
import Form from "./components/UI/Form";

function App() {
    const headerLinks = ["About"];
    const [locations, setLocations] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);

    function createCard(newLocation){
        setLocations([...locations, newLocation]);
        setModalStatus(false);
    }

    function removeCard(card){
        setLocations(locations.filter(location => (location.name !== card.name || location.country !== card.country)))
    }

    return (
        <div className={styles.App}>
            <Modal visible={modalStatus} setVisible={setModalStatus}>
                <Form create={createCard} buttonText="Add location to the list" titleText="Enter location name"/>
            </Modal>
            <NavBar text={headerLinks} setModalStatus={setModalStatus}>
                <p title="Add weather" className={styles.AddCardItem} onClick={()=>setModalStatus(true)}>+</p>
            </NavBar>
            { locations.length
                ? <WeatherList locations={locations} remove={removeCard}/>
                : <div>
                    <h1 style={{textAlign:"center", marginTop:"20rem"}}>Add your weather!</h1>
                    <h3 style={{textAlign:"center", marginTop:"1rem"}}>(press "+" to add weather, "-" to delete)</h3>
                </div>
            }
        </div>
    );
}

export default App;
