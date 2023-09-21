import React, { useContext } from 'react'
import './main.css'
import Property from '../main-property/Property'
import { WeatherContext } from '../../GlobalContext'


function Main() {

  const {
    show, 
    images
    } = useContext(WeatherContext)

  return (
    <div className={show ? "main active" : "main"}>
            <img src={images.length ? images : "assets/mount.jpg"} alt="img" />
            <Property />
            
    </div>
  )
}

export default Main