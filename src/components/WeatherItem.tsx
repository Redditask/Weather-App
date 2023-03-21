import React, {useState} from "react";

import styles from "../styles/components/WeatherItem.module.scss";

import Loader from "./UI/Loader";

interface WeatherItemProps {
    location: any;
    remove: (card: any) => void;
}

const WeatherItem: React.FC<WeatherItemProps> = ({location, remove}) => {
    const [data, setData] = useState<any>({});
    const [image, setImage] = useState(``);

    // const getWeatherCallback = useCallback(async () => {
    //         const response = await WeatherApi.getData(location);
    //         setData({
    //             ...data,
    //             temp: Math.round(response.data.main.temp - 273),
    //             humidity: response.data.main.humidity,
    //             weather: response.data.weather[0].main,
    //             wind: response.data.wind.speed
    //         });
    //         setImage(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`);
    //     }
    // );
    //чтобы вызывалсь одна и та же функция, а не создавалась новая при каждом рендере

    // const [fetch, isLoading, error] = useFetching(getWeatherCallback);
    //
    // useEffect(() => {
    //     fetch();
    // }, []);

    return (
        <div className={styles.WeatherItem}>
            {/*{isLoading*/}
            {/*    ? <Loader/>*/}
            {/*    : error*/}
            ? <div className={styles.WeatherItem__error}>
            <div title="Location" className={styles.WeatherItem__title}>{location.name}, {location.country}</div>
            <p>Sorry, we have no data for this</p>
            <p title="Delete weather" className={styles.DeleteCardItem}
               onClick={() => remove(location)}>Delete</p>
        </div>
            : <>
            <div className={styles.WeatherItem__leftHalf}>
                <img src={image} alt='icon' className={styles.WeatherItem__image}/>
                <div title="weather" className={styles.WeatherItem__weatherState}>{data.weather}</div>
                <p title="Delete weather" className={styles.DeleteCardItem}
                   onClick={() => remove(location)}>Delete</p>
            </div>

            <div className={styles.WeatherItem__data}>
                <div title="Location"
                     className={styles.WeatherItem__title}>{location.name}, {location.country}</div>
                <div className={styles.WeatherItem__element}>{data.temp}{'\u00b0'} temperature</div>
                <div className={styles.WeatherItem__element}>{data.humidity}% humidity</div>
                <div className={styles.WeatherItem__element}>{data.wind}m/s speed</div>
            </div>
        </>
        </div>
    );
};

export default WeatherItem;
