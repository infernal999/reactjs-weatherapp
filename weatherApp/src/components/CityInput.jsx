import React from 'react'
import Input from './Input';


export default function CityInput(props) {
    const {setShowInfo, GEO_API_KEY, setCityLat, setCityLon, setCityName} = props;

  return (
    <Input setCityName={setCityName} GEO_API_KEY={GEO_API_KEY} setCityLat={setCityLat} setCityLon={setCityLon} setShowInfo={setShowInfo}/>
  )
}
