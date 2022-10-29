import styles from "../styles/components/WeatherItem.module.scss";

import WeatherServise from "../WeatherAPI/weatherServise";
import {useFetching} from "../hooks/useFetching";

import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {AiOutlineClose} from "react-icons/ai"
import Loader from "./UI/Loader";

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

    const [fetch, isLoading] = useFetching(getWeatherCallback);

    useEffect(()=>{
        fetch();
    },[]);

    return (
        <div className={styles.WeatherItem}>
            {isLoading
                ? <Loader/>
                : <Fragment>
                    <div className={styles.WeatherItem__leftHalf}>
                        <img src={image} alt='icon'/>
                        <div title="weather" style={{textAlign:"center",fontSize:"2.5rem"}}>{data.weather}</div>
                        <p title="Delete weather" className={styles.DeleteCardItem} onClick={()=>remove(location)}>-</p>
                    </div>

                    <div className={styles.WeatherItem__data}>
                        <div title="Location" className={styles.WeatherItem__title}>{location.name}, {location.country}</div>
                        <div className={styles.WeatherItem__element}>{data.temp}{'\u00b0'} temperature</div>
                        <div className={styles.WeatherItem__element}>{data.humidity}% humidity</div>
                        <div className={styles.WeatherItem__element}>{data.wind}m/s speed</div>
                    </div>
                </Fragment>
            }
        </div>
    );
};

export default WeatherItem;
