import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import BrokenClouds from '../assets/broken-clouds.svg' 
import ClearSky from '../assets/clear-sky.svg' 

export default function WeatherImage(props) {

    const {weather} = props;

    const [image, setImage] = useState(null);

    useEffect(() => {
        handleWeatherImage(weather);
    }, [weather])

    function handleWeatherImage(weather) {
        switch (weather) {
            case 'overcast clouds':
                return setImage(BrokenClouds); // а як? ахах
                break;
            case 'few clouds':
                return setImage(BrokenClouds); // а як? ахах
                break;
            case 'scattered clouds':
                return setImage(BrokenClouds); // а як? ахах
                break;
            case 'clear sky':
                return setImage(ClearSky);
                break;
            default: return setImage();
            // case 'Rain':
            //     return ''
            //     break;
            // case 'Snow':
            //     return ''
            //     break;
            // case 'Mist':
            //     return ''
            //     break;
            // case 'Smoke':    
            //     return ''
            //     break;
            // case 'Haze':
            //     return ''
            //     break;
            // case 'Dust':
            //     return ''
            //     break;
            // case 'Fog':
            //     return ''
            //     break;

    } }



  return (
    <div className='w-full h-full flex justify-center items-center p-3'><img className="mb-10px object-fill w-[20%] h-[20%]" src={image}></img></div> 
  )
}
