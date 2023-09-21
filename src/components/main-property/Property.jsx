import React, { useContext, useState } from 'react'
import './property.css'
import { FaSearch} from 'react-icons/fa';
import { BsCloudHaze2} from 'react-icons/bs';
import { CiDark} from 'react-icons/ci';
import { BsCloudRain, BsBrightnessHigh} from 'react-icons/bs';
import { WeatherContext } from '../../GlobalContext'

function Property() {
    const {
        show, 
        handleShow, 
        text,
        handleText,
        handleFetch,
        textValue,
        weatherData
        } = useContext(WeatherContext)

        const now = new Date()
        const date = now.toDateString()
        

  return (

    <div className='property'>

        <div className="nav-top">
            <input type="text" placeholder='Search Here' value={text} onChange={handleText}/>
            <div className="search-btn" onClick={() => handleFetch(text)}>
                <FaSearch className='search'/>
            </div>
        </div>

        <div className="container">
            <div className="top">
                <h2 className='city-name'>{textValue ? textValue : "---"}</h2>
                <span className='date'>{date}</span>
            </div>

            <div className="bottom">
                <BsCloudHaze2 className='sun'/><br/>
                <span className='temp'>{textValue ? weatherData.main.temp.toFixed(0) : "--"}&deg;C</span><br />
                <span className='temp-type'>{textValue.length ? weatherData.weather[0].main : "--"}</span>
            </div>
        </div>


        <div className={show ? "switch-holder active" : "switch-holder"}>
            <div className={show ? "switch active" : "switch"} onClick={handleShow}></div>
        </div> 

    </div> 
  )

        
}

export default Property