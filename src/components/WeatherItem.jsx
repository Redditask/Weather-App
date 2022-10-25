import styles from "../styles/components/WeatherItem.module.scss";

import WeatherServise from "../WeatherAPI/weatherServise";
import {useFetching} from "../hooks/useFetching";

import React, {useCallback, useEffect, useState} from 'react';
import {AiOutlineClose} from "react-icons/ai"

const WeatherItem = ({location, remove}) => {
    const [data, setData] = useState({});
    const [image, setImage] = useState(``);


    const getWeatherCallback = useCallback(async ()=> {
            const response = await WeatherServise.getData(location);
            setData({...data,
                temp: Math.round(response.data.main.temp-273),
                humidity: response.data.main.humidity,
                weather: response.data.weather[0].main,
                wind: response.data.wind.speed
            });
            setImage(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`);
        }
    );
    //чтобы вызывалсь одна и та же функция, а не создавалась новая при каждом рендере

    const [fetch] = useFetching(getWeatherCallback);

    useEffect(()=>{
        fetch();
    },[]);

    return (
        <div className={styles.WeatherItem}>
            <div className={styles.WeatherItem__element}>
                <img src={image} alt='icon'/>
                <div title="weather" style={{textAlign:"center"}}>{data.weather}</div>
            </div>

            <div className={styles.WeatherItem__data}>
                <div title="Location" className={styles.WeatherItem__title}>{location}</div>
                <div className={styles.WeatherItem__element}>{data.temp}{'\u00b0'} temperature</div>
                <div className={styles.WeatherItem__element}>{data.humidity}% humidity</div>
                <div className={styles.WeatherItem__element}>{data.wind}m/s speed</div>
            </div>
            <AiOutlineClose title="Remove card" className={styles.DeleteIcon} onClick={()=>remove(location)}/>
        </div>
    );
};

export default WeatherItem;
