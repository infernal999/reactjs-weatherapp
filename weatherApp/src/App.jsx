import { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';
import CityInput from './components/CityInput';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [data, setData] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [cityLat, setCityLat] = useState();
  const [cityLon, setCityLon] = useState();
  const [error, setError] = useState(null);
  const [cityName, setCityName] = useState("");
  // const [cityName, setCityName] = useState("");

  const GEO_API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (cityLat && cityLon) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${GEO_API_KEY}`;

      async function fetchApiData() {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const apiData = await response.json();
          setData(apiData);
          console.log(apiData);
        } catch (err) {
          setError(err.message);
        }
      }

      fetchApiData();
    }
  }, [cityLat, cityLon, showInfo]);

  // function handleCityName(cityName) {
  //   setCityName(cityName);
  // }

  return (
    <main className="min-h-screen flex bg-gradient-to-b from-amber-500 to-amber-800 justify-center items-center ">
      <motion.div
        layout
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-[20%] min-h-fit flex flex-col gap-4 mx-auto justify-center bg-neutral-50 border rounded p-4 shadow-[5px_5px_rgba(0,_0,_00,_0.2),_10px_10px_rgba(0,_0,_00,_0.1),_15px_15px_rgba(0,_00,_00,_0.05)]"
      >
        <CityInput
          GEO_API_KEY={GEO_API_KEY}
          setCityLat={setCityLat}
          setCityLon={setCityLon}
          setShowInfo={setShowInfo}
          setCityName={setCityName}
          // handleCityName={handleCityName}
        />

          {showInfo && ( 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              exit={{ opacity: 0, scale: 0, transition:{duration:1} }}
            >
              <WeatherInfo cityName={cityName} data={data} setData={setData} />
            </motion.div>
          ) }
        </motion.div>

    </main>
  );
}

export default App;
