import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import WeatherImage from './WeatherImage';

export default function WeatherInfo(props) {
  const { data, cityName } = props;
  const [image, setImage] = useState(null);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.3 },
      }}
      className="flex flex-col flex-wrap min-h-full "
    >
      <ul className="flex flex-col gap-2 py-3">
        <li>
          <h1 className="mx-auto text-center font-bold text-xl py-3">
            {cityName}
          </h1>
        </li>
        <li>
          <hr className="border-[1px] border-amber-500"></hr>
        </li>
        <li className="flex justify-between">
          Weather:{' '}
          <span className="font-semibold">{data?.weather[0].description}</span>
        </li>
        <li>
          <hr></hr>
        </li>
        <li className="flex justify-between">
          Temp:{' '}
          <span className="font-semibold">
            {`${data?.main.temp - 273.15}`.slice(0, 2) + ' °C'}
          </span>
        </li>
        <li>
          <hr></hr>
        </li>
        <li className="flex justify-between">
          Humidity: <span className="font-semibold">{data?.main.humidity}</span>
        </li>
        <li>
          <hr></hr>
        </li>
        <li className="flex justify-between">
          Wind: <span className="font-semibold">{data?.wind.speed} km</span>
        </li>
        <li className="flex items-center">
          {data && <WeatherImage weather={data.weather[0].description} />}
        </li>
      </ul>
    </motion.div>
  );
}
