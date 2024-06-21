import React from 'react';
import { motion } from 'framer-motion';
export default function Input(props) {
  const { GEO_API_KEY, setCityLat, setCityLon, setShowInfo, setCityName} =
    props;

  async function fetchGeoData(cityName) {
    try {
      const res = await fetch(
        'http://api.openweathermap.org/geo/1.0/direct?q=' +
          cityName +
          '&limit=1&appid=' +
          GEO_API_KEY
      );
      const geoData = await res.json();

      console.log(geoData);
      if (geoData.length > 0) {
        let lat = await geoData[0].lat;
        let lon = await geoData[0].lon;
        setCityLat(`${lat}`);
        setCityLon(`${lon}`);
        setShowInfo(true);
      } else {
        setShowInfo(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      fetchGeoData(event.target.value);
      setCityName(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <motion.input
      layout
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.3 },
      }}
      className={'focus:outline-none focus:ring focus:border-amber-600 text-center'}
      placeholder="Type your city here"
      type="text"
      onKeyDown={handleKeyDown}
    />
  );
}
