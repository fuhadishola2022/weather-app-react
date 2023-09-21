import React, {useContext, useState} from 'react'
import './side.css'
import { WeatherContext } from '../../GlobalContext'
import { WiHumidity} from 'react-icons/wi';
import { TiWeatherWindyCloudy} from 'react-icons/ti';
import { BsCloudRain, BsBrightnessHigh} from 'react-icons/bs';
import { CiTempHigh} from 'react-icons/ci';
import { PiWind} from 'react-icons/pi';


function Side() {
  const {show, mode, handleMode, weatherData, textValue} = useContext(WeatherContext)

  
  
  return (
    <div className={show ? "side" : "side active"}>

      <div className="side-container">  
        <div>
          <WiHumidity className='icon'/>
        <h3 className='humidity'>Humidity</h3>
        <span className='humidity-span'>{textValue.length ? weatherData.main.humidity.toFixed(0) : "--"}%</span>
        </div> 

        <div>
          <TiWeatherWindyCloudy className='icon'/>
        <h3 className='air-pressure'>Air Pressure</h3>
        <span className='air-pressure-span'>{textValue.length ? weatherData.main.pressure : "--"} PS</span>
        </div>
        
        <div>
          <CiTempHigh className='icon'/>
        <h3 className='rain'>Feels_Like</h3>
        <span className='rain-span'>{textValue.length ? weatherData.main.feels_like : "--"} &deg;C</span>
        </div>


        <div>
          <PiWind className='icon'/>
        <h3 className='wind'>Wind Speed </h3>
        <span className='wind-span'>{textValue.length ? weatherData.wind.speed : "--"} km/h</span>
        </div>


      </div>
        
    </div>
  )
}

export default Side