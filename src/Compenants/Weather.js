import React, { useContext, useEffect, useState} from 'react'
import CityContext from '../Context/CityContext';


export default function Weather() {

    const city = useContext(CityContext);

    const [weatherData , setWeatherData] = useState(null);

    const apiKey = '7e7cd59bd55036bfa0ed2d2c749b3903';
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    const search = async () => {
      try {
          let response = await fetch(apiUrl);
  
          if (response.ok) {
              let data = await response.json();
              setWeatherData(data);
          } else {
          }
      } catch (error) {
      }
    };
  

    useEffect(()=>{
      setWeatherData(null)
      search();
    },[city])
    


    return (
      <div className='flex flex-col items-center'>
          {weatherData && (
              <>
              <div className='p-2'>
                <h1 className='text-5xl font-bold text-white capitalize'>{city}</h1>
              </div>
                <div className='flex flex-col justify-center items-center'>
                  {weatherData.main.temp > 30 ? (
                    <div className='flex flex-col justify-center items-center'>
                      <img className='h-36' src={process.env.PUBLIC_URL +'/Icons/PNG/sunny-day-16458.png'} alt={weatherData.main.temp}/>
                      <h3 className='text-white text-3xl font-bold'>{weatherData.main.temp} °C</h3>
                    </div>
                  ):(weatherData.main.temp > 25 ? (
                    <div className='flex flex-col justify-center items-center'>
                      <img className='h-36' src={process.env.PUBLIC_URL +'/Icons/PNG/sun-and-blue-cloud-16460.png'} alt={weatherData.main.temp}/>
                      <h3 className='text-white text-3xl font-bold'>{weatherData.main.temp} °C</h3>
                    </div>
                  ):(weatherData.main.temp > 18 ? (
                    <div className='flex flex-col justify-center items-center'>
                      <img className='h-36' src={process.env.PUBLIC_URL +'/Icons/PNG/blue-clouds-and-sun-16461.png'} alt={weatherData.main.temp}/>
                      <h3 className='text-white text-3xl font-bold'>{weatherData.main.temp} °C</h3>
                    </div>
                  ):(
                    <div className='flex flex-col justify-center items-center'>
                      <img className='h-36' src={process.env.PUBLIC_URL +'/Icons/PNG/cloudy-weather-16459.png'} alt={weatherData.main.temp}/>
                      <h3 className='text-white text-3xl font-bold'>{weatherData.main.temp} °C</h3>
                    </div>
                  ))
                  )}
                  <div className='text-2xl text-white font-bold flex p-5'>
                  <div className='flex p-2 px-5'>
                    <img className='h-8 px-2' src={process.env.PUBLIC_URL +'/Icons/PNG/humidity.png'} alt={weatherData.main.humidity}/>
                    <p>{weatherData.main.humidity} %</p>
                  </div>
                  <div className='flex p-2 px-5'>
                    <img className='h-8 px-2' src={process.env.PUBLIC_URL +'/Icons/PNG/windy-16476.png'} alt={weatherData.wind.speed}/>
                    <p>{weatherData.wind.speed} m/s</p>
                  </div>

                  </div>
                </div>

              </>
          )}
      </div>
      );
}
