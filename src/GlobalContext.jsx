import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const WeatherContext = createContext(null)

export function WeatherContextProvider(props) {

    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    const [textValue, setTextValue] = useState('')
    const [images, setImages] = useState([])
    const [weatherData, setWeatherData] = useState([])

    const handleShow = () => {
        setShow(!show)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }  

   

    //fetching Pictures

    const API_KEY_PICTURE = '37296108-dfc55a2aa6e856dadb0cccff3'
    const API_KEY_WEATHER = '637f9d53b0a5a9403f0acd5dbcd8ff67'

    const random = Math.floor(Math.random()*10)

    

    const handleFetch = (searchTerm) => {
      if(searchTerm.length){
        axios.get(`https://pixabay.com/api/?key=${API_KEY_PICTURE}&q=${searchTerm}&image_type=photo`)
      .then((response) => setImages(response.data.hits[random].largeImageURL))
      .catch((err) => console.log(err))
      } 
      
      setTextValue(searchTerm)  
    }

    useEffect(() => {
      if(text.length){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&unit=metric&appid=637f9d53b0a5a9403f0acd5dbcd8ff67`)
      .then((data) => setWeatherData(data.data))
      .catch((err) => {
        console.log(err)
      })
      }
      
    }, [text])

   
   
    


    const contextValue = {
      show, 
      handleShow, 
      text,
      handleText,
      images,
      handleFetch,
      textValue,
      weatherData
    }

  return (
    <WeatherContext.Provider value={contextValue}>
        {props.children}
    </WeatherContext.Provider>
  )
}

